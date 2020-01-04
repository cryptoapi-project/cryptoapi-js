import { injectable, inject } from 'inversify';

import { TYPES_DI } from '../constants/inversify.constants';

import { IEventsClient } from '../interfaces/clients/events.client.interface';
import { IEthEventsClient } from '../interfaces/clients/eth/events/eth.events.client.interface';

import { ICryptoConfig } from '../interfaces/configs/crypto.config.interface';

@injectable()
export class EventsClient implements IEventsClient {
	eth: IEthEventsClient;

	constructor(
		@inject(TYPES_DI.IEthEventsClient) eth: IEthEventsClient,
	) {
		this.eth = eth;
	}

	/**
	 *  @method configure
	 *  @param {ICryptoConfig} config
	 */
	configure(config: ICryptoConfig): void {
		if (!config) {
			return;
		}

		this.eth.configure(config.eth.events, config.token);
	}
}
