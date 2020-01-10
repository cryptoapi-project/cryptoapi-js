import { injectable, inject } from 'inversify';

import { TYPES_DI } from '../constants/inversify.constants';

import { IEventsClient } from '../interfaces/clients/events.client.interface';
import { IEthEventsClient } from '../interfaces/clients/eth/events/eth.events.client.interface';
import { IUtxoEventsClient } from '../interfaces/clients/utxo/events/utxo.events.client.interface';

import { ICryptoConfig } from '../interfaces/configs/crypto.config.interface';

@injectable()
export class EventsClient implements IEventsClient {
	eth: IEthEventsClient;
	btc: IUtxoEventsClient;

	constructor(
		@inject(TYPES_DI.IEthEventsClient) eth: IEthEventsClient,
		@inject(TYPES_DI.IUtxoEventsClient) btc: IUtxoEventsClient,
	) {
		this.eth = eth;
		this.btc = btc;
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
		this.btc.configure(config.btc.events, config.token);
	}
}
