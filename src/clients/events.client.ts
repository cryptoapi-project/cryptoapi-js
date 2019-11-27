import { injectable, inject } from 'inversify';

import { TYPES_DI } from '../constants/inversify.constants';

import { IEventsClient } from '../interfaces/clients/events.client.interface';
import { IEthEventsClient } from '../interfaces/eth.events/eth.events.client.interface';
import { ICryptoConfig } from '../interfaces/configs/crypto.config.interface';

@injectable()
export class EventsClient implements IEventsClient {
	eth: IEthEventsClient;

	constructor(
		@inject(TYPES_DI.IEthEventsClient) eth: IEthEventsClient,
	) {
		this.eth = eth;
	}

	configure(config: ICryptoConfig): void {
		if (!config) {
			return;
		}

		if (config.eth) {
			this.eth.connect(config.eth.events!);
		}
		// TODO work with token
	}
}
