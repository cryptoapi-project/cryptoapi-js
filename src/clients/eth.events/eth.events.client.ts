import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import WS from 'ws';

import { METHODS, SUBSCRIPTIONS } from '../../constants/events.constants';
import { TYPES_DEPENDENCIES } from '../../constants/inversify.constants';

import {
	AddressTransactionSubscription,
	TokenTransferSubscription,
	TransactionConrimationSubscription,
} from '../../dtos/event.dtos';
import { IEthEventsClient } from '../../interfaces/eth.events/eth.events.client.interface';
import { IIdHelper } from '../../interfaces/helpers/id.helper.interface';
import { IEthEventsConfig } from '../../interfaces/configs/events.config.interface';

@injectable()
export class EthEventsClient implements IEthEventsClient {
	private subscribers: Map<string | number, { params: any[], cb: Function }> = new Map();
	private connectedSubscribers: Function[] = [];
	private disconnectedSubscribers: Function[] = [];
	private ws: WS;
	private config: IEthEventsConfig;
	private reconnectingInterval: any;
	public connected: boolean = false;

	constructor(
		@inject(TYPES_DEPENDENCIES.IIdHelper) private readonly idHelper: IIdHelper,
	) {}

	/**
	 *  @param {string} method
	 *  @param {any[]} params
	 *  @param {string | number} id
	 */
	private send(method: string, params: any[], id: string | number) {
		this.ws.send(JSON.stringify({ method, params, id }));
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

		if (this.config.reconnect) {
			this.reconnect();
		}
	}

	/**
	 *  @param {string} url
	 */
	connect(config: IEthEventsConfig) {
		if (!config || !config.url) {
			return;
		}

		this.ws = new WS(config.url);
		this.ws.onmessage = this.onMessage.bind(this);
		this.ws.onopen = this.onOpen.bind(this);
		this.ws.onclose = this.onClose.bind(this);
		this.ws.onerror = () => { console.log('error') };
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
			if (this.config.attempts && attempt > this.config.attempts) {
				throw new Error('Connection attempts are over');
			}

			this.connect(this.config);
		}, this.config.timeout);
	}

	/**
	 * close ws
	 */
	close() {
		this.ws.close();
		this.config = { url: null };
		this.subscribers = new Map();
		this.connectedSubscribers = [];
		this.disconnectedSubscribers = [];
	}

	/**
	 *  @param {Function} cb
	 */
	onConnected(cb: Function) {
		this.connectedSubscribers.push(cb);
	}

	/**
	 *  @param {Function} cb
	 */
	onDisconnected(cb: Function) {
		this.disconnectedSubscribers.push(cb);
	}

	/**
	 *  @param {number} confirmations
	 *  @param {Function} cb
	 */
	onBlock(confirmations: number, cb: Function) {
		if (!this.connected) {
			throw new Error('Disconnected');
		}

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
	onAddressTransactions({ address, confirmations }: AddressTransactionSubscription, cb: Function) {
		if (!this.connected) {
			throw new Error('Disconnected');
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
	onTokenTransfers({ token, address, confirmations }: TokenTransferSubscription, cb: Function) {
		if (!this.connected) {
			throw new Error('Disconnected');
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
	onTransactionConrimations({ hash, confirmations }: TransactionConrimationSubscription, cb: Function) {
		if (!this.connected) {
			throw new Error('Disconnected');
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
