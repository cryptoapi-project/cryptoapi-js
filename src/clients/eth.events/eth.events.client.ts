import 'reflect-metadata';
import { injectable } from 'inversify';
import { fromJS } from 'immutable';
import { IMessageEvent, w3cwebsocket } from 'websocket';
import { SUBSCRIPTIONS } from '../../constants/events.constants';

import { IEthEventsClient } from '../../interfaces/eth.events/eth.events.client.interface';

import { Event } from '../../dtos/event.dto';

@injectable()
export class EthEventsClient implements IEthEventsClient {
	private _isListen: boolean = false;
	private _subscriptions: Map<string, Function[]>;

	// private _url: string;
	private _ws: w3cwebsocket;

	constructor() {
		this._ws = new w3cwebsocket('localhost:8080');
		this._subscriptions = fromJS({
			[SUBSCRIPTIONS.BLOCK]: [],
			[SUBSCRIPTIONS.TRANSACTION]: [],
			[SUBSCRIPTIONS.TRANSFER]: [],
			[SUBSCRIPTIONS.CONFIRMATION]: [],
		});
	}

	close() {
		this._ws.close();
	}

	subscribeBlock(countConfirmation: number, eventId: number) {
		this._ws.send(
			JSON.stringify({
				method: 'subscribe',
				params: ['new_block', countConfirmation],
				id: eventId,
			}),
		);
	}

	unsubscribeBlock(countConfirmation: number, eventId: number) {
		this._ws.send(
			JSON.stringify({
				method: 'unsubscribe',
				params: ['new_block', countConfirmation],
				id: eventId,
			}),
		);
	}

	private onMessage() {
		if (this._isListen) {
			return;
		}
		this._ws.onmessage = (event: IMessageEvent) => {
			// @ts-ignore
			const data: Event = JSON.parse(event.data);
			// @ts-ignore
			this._subscriptions.get(event.type).forEach((cb) => cb());
		};
	}

	onMessageBlock(cb: () => void) {
		this.onMessage();
		console.log(this._subscriptions);
		// this._subscriptions.get()
		// this._subscriptions.get(SUBSCRIPTIONS.BLOCK).push(cb);
	}

	// subscribeTransaction(){
	//     this._socket.send('subscribe', JSON.stringify({ params: [
	//             'block',
	//             1,
	//         ], id: 1 }))
	// }
	//
	// unsubscribeTransaction(){
	//     this._socket.send('unsubscribe', JSON.stringify({ params: [
	//             'block',
	//             1,
	//         ], id: 1 }))
	// }
	//
	// onMessageBlock(cb: Function) {
	//     this._socket.onMessage('block')
	//         .subscribe(cb)
	// }
	//
	// onMessageTransfer(cb: Function) {
	//     this._socket.onMessage('transfer')
	//         .subscribe(cb)
	// }
	//
	// onMessageTransaction(cb: Function) {
	//     this._socket.onMessage('transfer')
	//         .subscribe(cb)
	// }
}
