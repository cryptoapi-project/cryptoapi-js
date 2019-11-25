import 'reflect-metadata';
import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../constants/inversify.constants';

import { ICrypto } from '../interfaces/crypto.interface';
import { IApiClient } from '../interfaces/clients/api.client.interface';
import { IEventsClient } from '../interfaces/clients/events.client.interface';
import { ICryptoConfig } from '../interfaces/configs/crypto.config.interface';
import { UnauthorizedException } from '../exceptions/unauthorized.exception';
import { CryptoConfig } from '../dtos/crypto.config';

@injectable()
export class Crypto implements ICrypto {
	private _config = new CryptoConfig();

	constructor(
		@inject(TYPES_DI.IApiClient) private readonly _api: IApiClient,
		@inject(TYPES_DI.IEventsClient) private readonly _events: IEventsClient,
	) {}

	/**
	 * Configure Crypto client
	 * @method
	 * @name configure
	 * @param {ICryptoConfig} config
	 * @return {void}
	 */
	configure(config: ICryptoConfig) {
		this._config = config;
		this._api.configure(config);
	}

	/**
	 * Check token access.
	 * @private method
	 * @name _checkCredentials
	 * @return {Error|void}
	 */
	private _checkCredentials(): void {
		if (!this._config.token) {
			throw new UnauthorizedException('Token not found.');
		}
	}

	/**
	 *
	 * Check credentials before getting access to events clients.
	 * @property
	 * @name events
	 * @return {IEventsClient}
	 */
	get events() {
		this._checkCredentials();
		return this._events;
	}

	/**
	 *
	 * Check credentials before getting access to api clients.
	 * @property
	 * @name api
	 * @return {IApiClient}
	 */
	get api() {
		this._checkCredentials();
		return this._api;
	}
}
