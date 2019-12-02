import 'reflect-metadata';
import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../constants/inversify.constants';

import { ICrypto } from '../interfaces/crypto.interface';
import { IApiClient } from '../interfaces/clients/api.client.interface';
import { IEventsClient } from '../interfaces/clients/events.client.interface';
import { ICryptoConfig } from '../interfaces/configs/crypto.config.interface';
import { UnauthorizedException } from '../exceptions/http.exceptions/unauthorized.exception';

import { CryptoConfig } from '../dtos/crypto.config';

@injectable()
export class Crypto implements ICrypto {
	private _config: ICryptoConfig|null = null;

	constructor(
		@inject(TYPES_DI.IApiClient) private readonly _api: IApiClient,
		@inject(TYPES_DI.IEventsClient) private readonly _events: IEventsClient,
	) {}

	/**
	 * Configure Crypto client
	 * @method configure
	 * @param {ICryptoConfig} config
	 * @return {void}
	 */
	configure(config: ICryptoConfig) {
		this._config = new CryptoConfig(config);
		this._api.configure(config);
		this._events.configure(config);
	}

	/**
	 * Check token access.
	 * @private method _checkCredentials
	 * @return {Error|void}
	 */
	private _checkCredentials(): void {
		if (!this._config || !this._config.token) {
			throw new UnauthorizedException('Token not found.');
		}
	}

	/**
	 * Check credentials before getting access to events clients.
	 * @property events
	 * @return {IEventsClient}
	 */
	get events() {
		this._checkCredentials();
		return this._events;
	}

	/**
	 * Check credentials before getting access to api clients.
	 * @property api
	 * @return {IApiClient}
	 */
	get api() {
		this._checkCredentials();
		return this._api;
	}
}
