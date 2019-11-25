import 'reflect-metadata';
import { injectable } from 'inversify';

import { IEthEventsClient } from '../../interfaces/eth.events/eth.events.client.interface';

@injectable()
export class EthEventsClient implements IEthEventsClient {
	close(): void {
	}

	onMessageBlock(cb: () => void): void {
	}

	subscribeBlock(countConfirmation: number, eventId: number): void {
	}

	unsubscribeBlock(countConfirmation: number, eventId: number): void {
	}
}
