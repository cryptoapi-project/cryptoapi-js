import { inject, injectable } from 'inversify';
import WS from 'isomorphic-ws';
import 'reflect-metadata';

import { METHODS, RESPONSE_KEYS, SUBSCRIPTIONS } from '@src/constants/events.constants';
import { TYPES_DI } from '@src/constants/inversify.constants';
import { BalanceNotification, TransactionConfirmationNotification } from '@src/dtos/base/event.notification.dtos';
import { AddressSubscription, TransactionConfirmationSubscription } from '@src/dtos/base/event.subscription.dtos';
import { IBaseEventsClient } from '@src/interfaces/clients/base.events.client/base.events.client.interface';
import { IEventsConfig, IServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { IIdHelper } from '@src/interfaces/providers/helpers/id.helper.interface';
import { ISubsHelper } from '@src/interfaces/providers/helpers/subs.helper.interface';

@injectable()
export abstract class BaseEventsClient<BlockNotification, TransactionNotification>
	implements IBaseEventsClient<BlockNotification, TransactionNotification> {
	protected subscribers: Map<string | number, { params: any[], cb: (notification: any) => void }> = new Map();
	protected connectedSubscribers: Array<() => void> = [];
	protected disconnectedSubscribers: Array<() => void> = [];
	protected pendingSubscribers: Map<string | number, (error: string | null) => void> = new Map();
	protected pendingUnsubscribers: Map<string | number, (error: string | null) => void> = new Map();

	protected ws: WS | null = null;
	protected wsCb: (error?: any) => any = () => {};

	protected config: IEventsConfig | null = null;
	protected token: string | null = null;
	protected reconnectingInterval: any;
	public connecting: boolean = false;
	public connected: boolean = false;
	public error: string = '';

	protected pingInterval: any;
	protected pong: { id: string | number, timeout: any } = { id: 0, timeout: null };

	constructor(
		@inject(TYPES_DI.IIdHelper) protected readonly idHelper: IIdHelper,
		@inject(TYPES_DI.ISubsHelper) protected readonly subsHelper: ISubsHelper,
	) {}

	/**
	 *  @method onMessage
	 *  @param {WS.MessageEvent} event
	 *  @return {sub}
	 */
	protected abstract onMessage(event: WS.MessageEvent): void;

	/**
	 *  @method validateAddress
	 *  @param {string} address
	 *  @param {string} key
	 */
	protected abstract validateAddress(address: string, key?: string): void;

	/**
	 *  @method configure
	 *  @param {IServerConfig} config
	 *  @param {string} token
	 */
	configure(config: IServerConfig, token: string) {
		this.config = config.events;
		this.token = token;
	}

	/**
	 * 	@method send
	 *  @param {string} method
	 *  @param {any[]} params
	 *  @param {string | number} id
	 */
	protected send(method: string, params: any[], id: string | number) {
		this.ws!.send(JSON.stringify({ method, params, id }));
	}

	/**
	 *  @method isValidResponse
	 *  @param {any} data
	 */
	protected isValidResponse(data: any) {
		if (data.jsonrpc !== '2.0') {
			return false;
		}

		const keys = Object.keys(data).filter((key) => RESPONSE_KEYS.includes(key));

		return keys.length === RESPONSE_KEYS.length;
	}

	/**
	 *  @method isValidNotification
	 *  @param {any} data
	 */
	protected isValidNotification(data: any) {
		if (!data.method || !Object.values(SUBSCRIPTIONS).includes(data.method)) {
			return false;
		}

		if (!data.params || data.params.length < 2) {
			return false;
		}

		return true;
	}

	/**
	 *  @method setSubscription
	 *  @param {string | number} id
	 *  @param {any} params
	 *  @param {Function} cb
	 */
	protected async setSubscription(id: string | number, params: any[], cb: (notification: any) => void) {
		return new Promise<string | number>((resolve, reject) => {
			this.subscribers.set(id, { params, cb });
			this.pendingSubscribers.set(id, (error) => {
				if (error) {
					this.subscribers.delete(id);
					reject(error);
				} else {
					this.pendingSubscribers.delete(id);
					resolve(id);
				}
			});

			if (this.connected) {
				this.send(METHODS.SUBSCRIBE, params, id);
			} else if (!this.connecting) {
				this.connect();
			}
		});
	}

	/**
	 *  @method _handleEventOnMessage
	 *  @param {WS.MessageEvent} event
	 *  @return {sub: { params: any[], cb: (notification: any) => void } | undefined; method: string; notification: any; } | null }
	 */
	protected _handleEventOnMessage<Notification>(event: WS.MessageEvent): {
			sub: { params: any[], cb: (notification: any) => void } | undefined;
			method: string;
			notification: any;
		} | null {
		const data = JSON.parse(event.data.toString());

		if (this.pong.id === data.id) {
			clearTimeout(this.pong.timeout);
			return null;
		}

		if (this.isValidResponse(data)) {
			const cb = this.pendingSubscribers.get(data.id) || this.pendingUnsubscribers.get(data.id);

			if (cb) {
				cb(data.error);
			}

			return null;
		}

		if (!this.isValidNotification(data)) {
			return null;
		}

		const [id, notification] = data.params;
		const sub = this.subscribers.get(id);

		if (!sub) {
			return null;
		}

		return { sub, method: data.method, notification };
	}

	/**
	 * @method onOpen
	 * handler on open ws
	 */
	protected onOpen() {
		this.connecting = false;
		this.connected = true;
		this.wsCb();
		this.connectedSubscribers.forEach((cb) => cb());
		this.resubscribe();
	}

	/**
	 * @method onClose
	 * handler on close ws
	 */
	protected onClose() {
		this.connecting = false;
		this.connected = false;
		this.wsCb();
		this.disconnectedSubscribers.forEach((cb) => cb());

		if (!this.config!.resubscribe) {
			this.pendingSubscribers.forEach((cb) => { cb('Disconnected'); });
			this.pendingUnsubscribers.forEach((cb) => { cb('Disconnected'); });

			this.subscribers = new Map();
			this.pendingUnsubscribers = new Map();
			this.pendingSubscribers = new Map();
		}

		clearInterval(this.pingInterval);

		if (this.config!.reconnect) {
			this.reconnect();
		}
	}

	/**
	 * @method onError
	 * handler on error ws
	 */
	protected onError(error: any) {
		this.connecting = false;
		this.error = error.message || 'Error';
		this.wsCb(this.error);
	}

	/**
	 * @method resubscribe
	 */
	resubscribe() {
		this.pendingUnsubscribers.forEach((sub, id) => {
			sub(null);
			this.subscribers.delete(id);
		});
		this.pendingUnsubscribers = new Map();

		this.pendingSubscribers.forEach((cb, id) => {
			const sub = this.subscribers.get(id);

			this.send(METHODS.SUBSCRIBE, sub!.params, id);
		});

		this.subscribers.forEach(({ params, cb }, id) => {
			if (!this.pendingSubscribers.has(id)) {
				this.setSubscription(id, params, cb);
			}
		});
	}

	/**
	 *  @method connect
	 */
	connect() {
		if (this.connected) {
			throw new Error('Already connected');
		}

		if (this.connecting) {
			throw new Error('Already connecting');
		}

		if (!this.token) {
			throw new Error('Token is required');
		}

		if (!this.config || !this.config.url) {
			throw new Error('Url is required');
		}

		return new Promise((resolve, reject) => {
			this.connecting = true;

			this.ws = new WS(`${this.config!.url}?token=${this.token}`);

			this.ws.onmessage = this.onMessage.bind(this);
			this.ws.onclose = this.onClose.bind(this);
			this.ws.onopen = this.onOpen.bind(this);
			this.ws.onerror = this.onError.bind(this);

			this.wsCb = (error) => error ? reject(error) : resolve();

			this.pingInterval = setInterval(() => {
				if (!this.connected) {
					clearInterval(this.pingInterval);
					this.pingInterval = null;
				}

				if (!this.ws?.readyState) {
					return;
				}

				if (this.ws && this.ws.readyState > 1) {
					this.onClose();
					return;
				}

				this.pong.id = this.idHelper.get();

				this.send(METHODS.PING, [], this.pong.id);

				this.pong.timeout = setTimeout(() => {
					this.onClose();
				}, this.config!.pong);

			}, this.config!.ping);
		});

	}

	/**
	 * @method reconnect
	 * try to reconnect ws
	 */
	reconnect() {
		if (this.reconnectingInterval) {
			return;
		}

		let attempt = 1;

		if (!this.connecting) {
			this.connect();
		}

		this.reconnectingInterval = setInterval(() => {
			if (this.connected) {
				clearInterval(this.reconnectingInterval);
				this.reconnectingInterval = null;
				return;
			}

			attempt += 1;
			if (this.config!.attempts && attempt > this.config!.attempts) {
				this.pendingSubscribers.forEach((cb) => { cb('Disconnected'); });
				this.pendingUnsubscribers.forEach((cb) => { cb('Disconnected'); });
				clearInterval(this.reconnectingInterval);
				throw new Error('Connection attempts are over');
			}

			if (!this.connecting) {
				this.connect();
			}

		}, this.config!.timeout);
	}

	/**
	 * @method disconnect
	 * close ws
	 */
	disconnect() {
		return new Promise((resolve, reject) => {
			this.wsCb = (error) => error ? reject(error) : resolve();
			this.ws!.close();
		});
	}

	/**
	 *  @method onConnected
	 *  @param {Function} cb
	 */
	onConnected(cb: () => void) {
		this.connectedSubscribers.push(cb);
	}

	/**
	 *  @method onDisconnected
	 *  @param {Function} cb
	 */
	onDisconnected(cb: () => void) {
		this.disconnectedSubscribers.push(cb);
	}

	/**
	 *  @method onBlock
	 *  @param {number} confirmations
	 *  @param {Function} cb
	 */
	onBlock(confirmations: number, cb: (notification: BlockNotification) => void) {
		this.subsHelper.validateConfirmations(confirmations);
		this.subsHelper.validateCallback(cb);

		const id = this.idHelper.get();
		const params = [SUBSCRIPTIONS.BLOCK, confirmations];

		return this.setSubscription(id, params, cb);
	}

	/**
	 *  @method _setAddressSubscription
	 *  @param {SUBSCRIPTIONS} type
	 *  @param {AddressSubscription} info
	 *  @param {Function} cb
	 */
	private _setAddressSubscription(type: SUBSCRIPTIONS, info: AddressSubscription, cb: (param: any) => void) {
		const { confirmations, address } = info;

		this.validateAddress(address, 'address');
		this.subsHelper.validateCallback(cb);

		if (confirmations) {
			this.subsHelper.validateConfirmations(confirmations);
		}

		const id = this.idHelper.get();
		const params = [type, address, confirmations];

		return this.setSubscription(id, params, cb);

	}

	/**
	 *  @method onAddressTransactions
	 *  @param {AddressSubscription} info
	 *  @param {Function} cb
	 */
	onAddressTransactions(
		info: AddressSubscription = { confirmations: 0, address: '' },
		cb: (notification: TransactionNotification) => void,
	) {
		return this._setAddressSubscription(SUBSCRIPTIONS.TRANSACTION, info, cb);
	}

	/**
	 *  @method onAddressBalance
	 *  @param {AddressSubscription} info
	 *  @param {Function} cb
	 */
	onAddressBalance(
		info: AddressSubscription,
		cb: (notification: BalanceNotification) => void,
	) {
		return this._setAddressSubscription(SUBSCRIPTIONS.BALANCE, info, cb);
	}

	/**
	 *  @method onTransactionConfirmations
	 *  @param {TransactionConfirmationSubscription} info
	 *  @param {Function} cb
	 */
	onTransactionConfirmations(
		info: TransactionConfirmationSubscription = { confirmations: 0, hash: '' },
		cb: (notification: TransactionConfirmationNotification) => void,
	) {
		const {hash, confirmations} = info;
		this.subsHelper.validateHash(hash);
		this.subsHelper.validateCallback(cb);

		if (confirmations) {
			this.subsHelper.validateConfirmations(confirmations);
		}

		const id = this.idHelper.get();
		const params = [SUBSCRIPTIONS.CONFIRMATION, hash, confirmations];

		return this.setSubscription(id, params, cb);
	}

	/**
	 *  @method unsubscribe
	 *  @param {string | number | Function} param
	 */
	unsubscribe(param: string | number | ((notification: any) => void) ) {
		let sub: { params: any[], cb: (notification: any) => void } | undefined;
		let id: string | number | undefined;

		if (param instanceof Function) {
			[id, sub] = [...this.subscribers].find(([, value]) => value.cb === param) || [];
		} else {
			sub = this.subscribers.get(param);
			id = param;
		}

		if (!sub || !id) {
			return Promise.resolve(true);
		}

		return new Promise<boolean>((resolve, reject) => {
			this.pendingUnsubscribers.set(id!, (error) => {
				if (error) {
					reject(error);
				} else {
					this.pendingUnsubscribers.delete(id!);
					this.subscribers.delete(id!);
					resolve(true);
				}
			});

			this.send(METHODS.UNSUBSCRIBE, sub!.params, id!);
		});

	}

}
