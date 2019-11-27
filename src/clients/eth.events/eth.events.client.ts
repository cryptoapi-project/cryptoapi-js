import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import WS from 'isomorphic-ws';

import { METHODS, SUBSCRIPTIONS } from '../../constants/events.constants';
import { TYPES_DI } from '../../constants/inversify.constants';

import {
	AddressTransactionSubscription,
	TokenTransferSubscription,
	TransactionConrimationSubscription,
} from '../../dtos/event.dtos';
import { IEthEventsClient } from '../../interfaces/eth.events/eth.events.client.interface';
import { IIdHelper } from '../../interfaces/providers/helpers/id.helper.interface';
import { ISubsHelper } from '../../interfaces/providers/helpers/subs.helper.interface';
import { IEventsConfig } from '../../interfaces/configs/crypto.config.interface';

@injectable()
export class EthEventsClient implements IEthEventsClient {
	private subscribers: Map<string | number, { params: any[], cb: (notificaton: any) => void }> = new Map();
	private connectedSubscribers: Array<() => void> = [];
	private disconnectedSubscribers: Array<() => void> = [];
	private ws: WS | null = null;
	private config: IEventsConfig | null = null;
	private reconnectingInterval: any;
	public connected: boolean = false;
	public error: string = '';

	constructor(
		@inject(TYPES_DI.IIdHelper) private readonly idHelper: IIdHelper,
		@inject(TYPES_DI.ISubsHelper) private readonly subsHelper: ISubsHelper,
	) {}

	/**
	 *  @param {string} method
	 *  @param {any[]} params
	 *  @param {string | number} id
	 */
	private send(method: string, params: any[], id: string | number) {
		this.ws!.send(JSON.stringify({ method, params, id }));
	}

	/**
	 *  @param {any} data
	 */
	private isValidMessage(data: any) {
		if (!data.method || !Object.values(SUBSCRIPTIONS).includes(data.method)) {
			return false;
		}

		if (!data.params || data.params.length < 2) {
			return false;
		}

		return true;
	}

	/**
	 *  @param {WS.MessageEvent} event
	 */
	private onMessage(event: WS.MessageEvent) {
		const data = JSON.parse(event.data.toString());

		if (!this.isValidMessage(data)) {
			return;
		}

		const [id, notificaton] = data.params;
		const sub = this.subscribers.get(id);

		if (!sub) {
			return;
		}

		sub.cb(notificaton);
	}

	/**
	 * handler on open ws
	 */
	private onOpen() {
		this.connected = true;
		this.connectedSubscribers.forEach((cb) => cb());
	}

	/**
	 * handler on close ws
	 */
	private onClose() {
		this.connected = false;
		this.disconnectedSubscribers.forEach((cb) => cb());

		if (this.config!.reconnect) {
			this.reconnect();
		}
	}

	/**
	 *  @param {string} url
	 */
	connect(config: IEventsConfig | null) {
		if (!config || !config.url) {
			return;
		}

		this.ws = new WS(config.url);
		this.ws.onmessage = this.onMessage.bind(this);
		this.ws.onopen = this.onOpen.bind(this);
		this.ws.onclose = this.onClose.bind(this);
		this.ws.onerror = (error) => { this.error = error.message; };
		this.config = config;
	}

	/**
	 * try to reconnect ws
	 */
	reconnect() {
		if (this.reconnectingInterval) {
			return;
		}

		let attempt = 1;
		this.connect(this.config);

		this.reconnectingInterval = setInterval(() => {
			if (this.connected) {
				clearInterval(this.reconnectingInterval);
				this.reconnectingInterval = null;
				return;
			}

			attempt += 1;
			if (this.config!.attempts && attempt > this.config!.attempts) {
				throw new Error('Connection attempts are over');
			}

			this.connect(this.config);
		}, this.config!.timeout);
	}

	/**
	 * close ws
	 */
	close() {
		this.ws!.close();
		this.config = null;
		this.subscribers = new Map();
		this.connectedSubscribers = [];
		this.disconnectedSubscribers = [];
	}

	/**
	 *  @param {Function} cb
	 */
	onConnected(cb: () => void) {
		this.connectedSubscribers.push(cb);
	}

	/**
	 *  @param {Function} cb
	 */
	onDisconnected(cb: () => void) {
		this.disconnectedSubscribers.push(cb);
	}

	/**
	 *  @param {number} confirmations
	 *  @param {Function} cb
	 */
	onBlock(confirmations: number, cb: (notificaton: any) => void) {
		if (!this.connected) {
			throw new Error('Disconnected');
		}

		this.subsHelper.validateConfirmations(confirmations);

		const id = this.idHelper.get();
		const params = [SUBSCRIPTIONS.BLOCK, confirmations];
		this.subscribers.set(id, { params, cb });

		this.send(METHODS.SUBSCRIBE, params, id);

		return id;
	}

	/**
	 *  @param {AddressTransactionSubscription} subscription
	 *  @param {Function} cb
	 */
	onAddressTransactions({ address, confirmations }: AddressTransactionSubscription, cb: (notificaton: any) => void) {
		if (!this.connected) {
			throw new Error('Disconnected');
		}

		this.subsHelper.validateAddress(address);

		if (confirmations) {
			this.subsHelper.validateConfirmations(confirmations);
		}

		const id = this.idHelper.get();
		const params = [SUBSCRIPTIONS.TRANSACTION, address, confirmations];
		this.subscribers.set(id, { params, cb });

		this.send(METHODS.SUBSCRIBE, params, id);

		return id;
	}

	/**
	 *  @param {TokenTransferSubscription} subscription
	 *  @param {Function} cb
	 */
	onTokenTransfers({ token, address, confirmations }: TokenTransferSubscription, cb: (notificaton: any) => void) {
		if (!this.connected) {
			throw new Error('Disconnected');
		}

		this.subsHelper.validateAddress(token, 'token');
		this.subsHelper.validateAddress(address);

		if (confirmations) {
			this.subsHelper.validateConfirmations(confirmations);
		}

		const id = this.idHelper.get();
		const params = [SUBSCRIPTIONS.TRANSFER, token, address, confirmations];
		this.subscribers.set(id, { params, cb });

		this.send(METHODS.SUBSCRIBE, params, id);

		return id;
	}

	/**
	 *  @param {TransactionConrimationSubscription} subscription
	 *  @param {Function} cb
	 */
	onTransactionConfirmations({ hash, confirmations }: TransactionConrimationSubscription, cb: (notificaton: any) => void) {
		if (!this.connected) {
			throw new Error('Disconnected');
		}

		this.subsHelper.validateHash(hash);

		if (confirmations) {
			this.subsHelper.validateConfirmations(confirmations);
		}

		const id = this.idHelper.get();
		const params = [SUBSCRIPTIONS.CONFIRMATION, hash, confirmations];
		this.subscribers.set(id, { params, cb });

		this.send(METHODS.SUBSCRIBE, params, id);

		return id;
	}

	/**
	 *  @param {string | number} id
	 */
	unsubscribe(id: string | number) {
		if (!this.connected) {
			throw new Error('Disconnected');
		}

		const sub = this.subscribers.get(id);

		if (sub) {
			this.send(METHODS.UNSUBSCRIBE, sub.params, id);
			this.subscribers.delete(id);
		}

		return true;
	}

}
