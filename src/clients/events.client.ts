import { injectable, inject } from 'inversify';

import { TYPES_DEPENDENCIES } from '../constants/inversify.constants';

import { IEventsClient } from '../interfaces/clients/events.client.interface';
import { IEthEventsClient } from '../interfaces/eth.events/eth.events.client.interface';
import {IConfigurableConfig} from '../interfaces/configs/configurable.config.interface';
import {IEventsConfig} from '../interfaces/configs/events.config.interface';

@injectable()
export class EventsClient implements IEventsClient,  IConfigurableConfig<IEventsConfig> {
	eth: IEthEventsClient;

	constructor(
		@inject(TYPES_DEPENDENCIES.IEthEventsClient) eth: IEthEventsClient,
	) {
		this.eth = eth;
	}

	setConfig(config: IEventsConfig): void {
		// TODO work with token
	}


}
