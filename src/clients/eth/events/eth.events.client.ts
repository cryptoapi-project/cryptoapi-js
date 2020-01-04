import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import WS from 'isomorphic-ws';

import { METHODS, SUBSCRIPTIONS, RESPONSE_KEYS } from '../../../constants/events.constants';
import { TYPES_DI } from '../../../constants/inversify.constants';

import {
	EthAddressTransactionSubscription,
	EthTokenTransferSubscription,
	EthTransactionConfirmationSubscription,
} from '../../../dtos/eth/eth.subscription.dtos';
import {
	EthBlockNotification,
	EthTransactionNotification,
	EthTransferNotification,
	EthTransactionConfirmationNotification,
} from '../../../dtos/eth/eth.notification.dtos';

import { IEthEventsClient } from '../../../interfaces/clients/eth/events/eth.events.client.interface';
import { IIdHelper } from '../../../interfaces/providers/helpers/id.helper.interface';
import { ISubsHelper } from '../../../interfaces/providers/helpers/subs.helper.interface';
import { IEventsConfig } from '../../../interfaces/configs/crypto.config.interface';

@injectable()
export class EthEventsClient implements IEthEventsClient {
	private subscribers: Map<string | number, { params: any[], cb: (notification: any) => void }> = new Map();
	private connectedSubscribers: Array<() => void> = [];
	private disconnectedSubscribers: Array<() => void> = [];
	private pendingSubscribers: Map<string | number, (error: string | null) => void> = new Map();
	private pendingUnsubscribers: Map<string | number, (error: string | null) => void> = new Map();

	private ws: WS | null = null;
	private wsCb: (error?: any) => any = () => {};

	private config: IEventsConfig | null = null;
	private token: string | null = null;
	private reconnectingInterval: any;
	public connecting: boolean = false;
	public connected: boolean = false;
	public error: string = '';

	private pingInterval: any;
	private pong: { id: string | number, timeout: any } = { id: 0, timeout: null };

	constructor(
		@inject(TYPES_DI.IIdHelper) private readonly idHelper: IIdHelper,
		@inject(TYPES_DI.ISubsHelper) private readonly subsHelper: ISubsHelper,
	) {}

	/**
	 *  @method configure
	 *  @param {IEventsConfig} config
	 *  @param {string} token
	 */
	configure(config: IEventsConfig, token: string) {
		this.config = config;
		this.token = token;
	}

	/**
	 * 	@method send
	 *  @param {string} method
	 *  @param {any[]} params
	 *  @param {string | number} id
	 */
	private send(method: string, params: any[], id: string | number) {
		this.ws!.send(JSON.stringify({ method, params, id }));
	}

	/**
	 *  @method isValidResponse
	 *  @param {any} data
	 */
	private isValidResponse(data: any) {
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
	private isValidNotification(data: any) {
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
	private async setSubscription(id: string | number, params: any[], cb: (notification: any) => void) {
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
	 *  @method onMessage
	 *  @param {WS.MessageEvent} event
	 */
	private onMessage(event: WS.MessageEvent) {
		const data = JSON.parse(event.data.toString());

		if (this.pong.id === data.id) {
			clearTimeout(this.pong.timeout);
			return;
		}

		if (this.isValidResponse(data)) {
			const cb = this.pendingSubscribers.get(data.id) || this.pendingUnsubscribers.get(data.id);

			if (cb) {
				cb(data.error);
			}

			return;
		}

		if (!this.isValidNotification(data)) {
			return;
		}

		const [id, notification] = data.params;
		const sub = this.subscribers.get(id);

		if (!sub) {
			return;
		}

		switch (data.method) {
			case SUBSCRIPTIONS.BLOCK:
				sub.cb(new EthBlockNotification(notification));
				break;
			case SUBSCRIPTIONS.TRANSACTION:
				sub.cb(new EthTransactionNotification(notification));
				break;
			case SUBSCRIPTIONS.TRANSFER:
				sub.cb(new EthTransferNotification(notification));
				break;
			case SUBSCRIPTIONS.CONFIRMATION:
				sub.cb(new EthTransactionConfirmationNotification(notification));
				break;
		}

	}

	/**
	 * @method onOpen
	 * handler on open ws
	 */
	private onOpen() {
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
	private onClose() {
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

		if (this.config!.reconnect) {
			this.reconnect();
		}
	}

	/**
	 * @method onError
	 * handler on error ws
	 */
	private onError(error: any) {
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
	onBlock(confirmations: number, cb: (notification: EthBlockNotification) => void) {
		this.subsHelper.validateConfirmations(confirmations);
		this.subsHelper.validateCallback(cb);

		const id = this.idHelper.get();
		const params = [SUBSCRIPTIONS.BLOCK, confirmations];

		return this.setSubscription(id, params, cb);
	}

	/**
	 *  @method onAddressTransactions
	 *  @param {EthAddressTransactionSubscription} subscription
	 *  @param {Function} cb
	 */
	onAddressTransactions(
		{ address, confirmations }: EthAddressTransactionSubscription,
		cb: (notification: EthTransactionNotification) => void,
	) {
		this.subsHelper.validateAddress(address);
		this.subsHelper.validateCallback(cb);

		if (confirmations) {
			this.subsHelper.validateConfirmations(confirmations);
		}

		const id = this.idHelper.get();
		const params = [SUBSCRIPTIONS.TRANSACTION, address, confirmations];

		return this.setSubscription(id, params, cb);
	}

	/**
	 *  @method onTokenTransfers
	 *  @param {EthTokenTransferSubscription} subscription
	 *  @param {Function} cb
	 */
	onTokenTransfers(
		{ token, address, confirmations }: EthTokenTransferSubscription,
		cb: (notification: EthTransferNotification) => void,
	) {
		this.subsHelper.validateAddress(token, 'token');
		this.subsHelper.validateAddress(address);
		this.subsHelper.validateCallback(cb);

		if (confirmations) {
			this.subsHelper.validateConfirmations(confirmations);
		}

		const id = this.idHelper.get();
		const params = [SUBSCRIPTIONS.TRANSFER, token, address, confirmations];

		return this.setSubscription(id, params, cb);
	}

	/**
	 *  @method onTransactionConfirmations
	 *  @param {EthTransactionConfirmationSubscription} subscription
	 *  @param {Function} cb
	 */
	onTransactionConfirmations(
		{ hash, confirmations }: EthTransactionConfirmationSubscription,
		cb: (notification: EthTransactionConfirmationNotification) => void,
	) {
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

		if (!sub && !id) {
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
