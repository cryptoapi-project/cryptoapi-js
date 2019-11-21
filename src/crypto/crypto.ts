import 'reflect-metadata';
import { inject, injectable } from 'inversify';

import { TYPES_DEPENDENCIES } from '../constants/inversify.constants';

import { ICrypto } from '../interfaces/crypto.interface';
import { IApiClient } from '../interfaces/clients/api.client.interface';
import { IEventsClient } from '../interfaces/clients/events.client.interface';
import { ICryptoConfig } from '../interfaces/configs/crypto.config.interface';
import { IConfigurableConfig } from '../interfaces/configs/configurable.config.interface';
import { IApiConfig } from '../interfaces/configs/api.config.interface';
import { IEventsConfig } from '../interfaces/configs/events.config.interface';

import { CryptoConfig } from '../dtos/crypto.config';

@injectable()
export class Crypto implements ICrypto {
	private _config: ICryptoConfig = new CryptoConfig({});

	constructor(
		@inject(TYPES_DEPENDENCIES.IApiClient)
		private readonly _api: IApiClient & IConfigurableConfig<IApiConfig>,
		@inject(TYPES_DEPENDENCIES.IEventsClient)
		private readonly _events: IEventsClient &
			IConfigurableConfig<IEventsConfig>,
	) {}

	setConfig(_config: ICryptoConfig) {
		this._config = _config;
		this._api.setConfig(_config);
		this._events.setConfig(_config.events);
	}

	private _checkCredentials(): boolean | Error {
		if (!this._config.token) {
			throw new Error('Token not found.');
		}

		return true;
	}

	get events() {
		if (!this._checkCredentials()) {
			return null;
		}
		return this._events;
	}

	get api() {
		if (!this._checkCredentials()) {
			return null;
		}
		return this._api;
	}
}
