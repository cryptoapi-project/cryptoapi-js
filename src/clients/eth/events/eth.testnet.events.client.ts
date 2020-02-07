import { inject, injectable } from 'inversify';

import { TYPES_DI } from '@src/constants/inversify.constants';
import { IEthEventsClient } from '@src/interfaces/clients/eth/events/eth.events.client.interface';
import { IEthTestnetEventsClient } from '@src/interfaces/clients/eth/events/eth.testnet.events.client.interface';
import { IEthServerConfig } from '@src/interfaces/configs/crypto.config.interface';

@injectable()
export class EthTestnetEventsClient implements IEthTestnetEventsClient {
	rinkeby: IEthEventsClient;

	constructor(
		@inject(TYPES_DI.IEthEventsClient) rinkeby: IEthEventsClient,
	) {
		this.rinkeby = rinkeby;
	}

	/**
	 *  @method configure
	 *  @param {IEthServerConfig} config
	 *  @param {string} token
	 */
	configure(config: IEthServerConfig, token: string): void {
		if (!config) {
			return;
		}

		this.rinkeby.configure({
			...config,
			events: { ...config.events, url: config.testnet.events.rinkeby },
		}, token);
	}
}
