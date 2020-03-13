import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { TYPES_DI } from '../constants/inversify.constants';
import { IHooksClient } from '../interfaces/clients/hooks.client.interface';
import { IHookEvents } from '../interfaces/clients/hooks/hook.events.interface';
import { IHooksConfig } from '../interfaces/configs/crypto.config.interface';
import { IHttpService } from '../interfaces/providers/http.service.interface';

@injectable()
export class HooksClient implements IHooksClient {
	events: IHookEvents;

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IHookEvents) eth: IHookEvents,
	) {
		this.events = eth;
	}

	/**
	 * Configure httpClient, hookEvents.
	 * @method configure
	 * @param {IHooksConfig} config
	 * @return {void}
	 */
	configure(config: IHooksConfig) {
		this.events.configure(config);
	}
}
