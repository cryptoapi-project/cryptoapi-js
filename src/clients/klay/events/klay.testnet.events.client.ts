import { inject, injectable } from 'inversify';

import { TYPES_DI } from '@src/constants/inversify.constants';
import { IKlayEventsClient } from '@src/interfaces/clients/klay/events/klay.events.client.interface';
import { IKlayTestnetEventsClient } from '@src/interfaces/clients/klay/events/klay.testnet.events.client.interface';
import { IKlayServerConfig } from '@src/interfaces/configs/crypto.config.interface';

@injectable()
export class KlayTestnetEventsClient implements IKlayTestnetEventsClient {
	baobab: IKlayEventsClient;

	constructor(
		@inject(TYPES_DI.IKlayEventsClient) baobab: IKlayEventsClient,
	) {
		this.baobab = baobab;
	}

	/**
	 *  @method configure
	 *  @param {IEthServerConfig} config
	 *  @param {string} token
	 */
	configure(config: IKlayServerConfig, token: string): void {
		if (!config) {
			return;
		}

		this.baobab.configure({
			...config,
			events: { ...config.events, url: config.testnet.events.baobab },
		}, token);
	}
}
