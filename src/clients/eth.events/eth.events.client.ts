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

@injectable()
export class EthEventsClient implements IEthEventsClient {
	private subscribers: Map<string | number, { params: any[], cb: Function }> = new Map();
	private ws: WS;

	constructor(
		@inject(TYPES_DEPENDENCIES.IIdHelper) private readonly idHelper: IIdHelper,

	) {
		this.ws = new WS('ws://localhost:8080');
		this.ws.onmessage = this.onMessage.bind(this);
		this.ws.onopen = this.onOpen.bind(this);
		this.ws.onclose = this.onClose.bind(this);
	}

	private send(method: string, params: any[], id: string | number) {
		this.ws.send(JSON.stringify({ method, params, id }));
	}

	private isValidMessage(data: any) {
		if (!data.method || !Object.values(SUBSCRIPTIONS).includes(data.method)) {
			return false;
		}

		if (!data.params || data.params.length < 2) {
			return false;
		}

		return true;
	}

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

	close() {
		this.ws.close();
		this.subscribers = new Map();
	}

	onOpen() {
		console.log('open');
	}

	onClose() {
		console.log('close');
	}


	onBlock(confirmations: number, cb: Function) {
		const id = this.idHelper.get();
		const params = [SUBSCRIPTIONS.BLOCK, confirmations];
		this.subscribers.set(id, { params, cb });

		this.send(METHODS.SUBSCRIBE, params, id);

		return id;
	}

	onAddressTransactions({ address, confirmations }: AddressTransactionSubscription, cb: Function) {
		const id = this.idHelper.get();
		const params = [SUBSCRIPTIONS.TRANSACTION, address, confirmations];
		this.subscribers.set(id, { params, cb });

		this.send(METHODS.SUBSCRIBE, params, id);

		return id;
	}

	onTokenTransfers({ token, address, confirmations }: TokenTransferSubscription, cb: Function) {
		const id = this.idHelper.get();
		const params = [SUBSCRIPTIONS.TRANSFER, token, address, confirmations];
		this.subscribers.set(id, { params, cb });

		this.send(METHODS.SUBSCRIBE, params, id);

		return id;
	}

	onTransactionConrimations({ hash, confirmations }: TransactionConrimationSubscription, cb: Function) {
		const id = this.idHelper.get();
		const params = [SUBSCRIPTIONS.CONFIRMATION, hash, confirmations];
		this.subscribers.set(id, { params, cb });

		this.send(METHODS.SUBSCRIBE, params, id);

		return id;
	}

	unsubscribe(id: number) {
		const sub = this.subscribers.get(id);

		if (sub) {
			this.send(METHODS.UNSUBSCRIBE, sub.params, id);
			this.subscribers.delete(id);
		}

		return true;
	}

}
