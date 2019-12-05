import { TYPES_DI } from '../constants/inversify.constants';

import {
	DEFAULT_TIMEOUT_REQUEST,
	ETH_BASE_HTTP_URL,
	ETH_BASE_WS_URL,
	ETH_BASE_WS_RECONNECT,
	ETH_BASE_WS_ATTEMPTS,
	ETH_BASE_WS_TIMEOUT,
	ETH_BASE_WS_RESUBSCRIBE,
} from '../config/capi.lib.config';
import { PING_INTERVAL, PONG_TIMEOUT } from '../constants/events.constants';

import { ICrypto, IPublicCrypto } from '../interfaces/crypto.interface';
import {
	ICryptoConfig,
	ICryptoOptions,
	IServerConfig,
} from '../interfaces/configs/crypto.config.interface';
import { IApiClient } from '../interfaces/clients/api.client.interface';
import { IEventsClient } from '../interfaces/clients/events.client.interface';

import { diContainer } from '../configuration/di.container';
import { InvalidParamsException } from '../exceptions/library.exceptions/invalid.params.exceptions';

class CryptoWrapper implements IPublicCrypto {
	private crypto: ICrypto;
	api: IApiClient | null;
	events: IEventsClient | null;

	constructor(config: ICryptoConfig);
	constructor(token: string, options?: ICryptoOptions);
	constructor(token: any, options?: any) {
		const cryptoConfig: any = {};

		if (!token) {
			throw new InvalidParamsException('Invalid params.');
		}

		options = options || {};

		if (typeof token !== 'string') {
			options = { ...options, ...token };
			token = token.token;
		}

		cryptoConfig.token = token;

		cryptoConfig.timeout = options.timeout || DEFAULT_TIMEOUT_REQUEST;

		cryptoConfig.eth = this.getEthConfig(options.eth);

		if (!cryptoConfig.token) {
			throw new InvalidParamsException('Token is not exist.');
		}

		this.crypto = diContainer.get<ICrypto>(TYPES_DI.ICrypto);
		this.crypto.configure(cryptoConfig);
		this.api = this.crypto.api;
		this.events = this.crypto.events;
	}

	/**
	 *  @method getEthConfig
	 *  @param {IServerConfig} eth
	 */
	private getEthConfig(eth: IServerConfig) {
		const config: any = {
			baseUrl: ETH_BASE_HTTP_URL,
			events: {
				url: ETH_BASE_WS_URL,
				reconnect: ETH_BASE_WS_RECONNECT,
				attempts: ETH_BASE_WS_ATTEMPTS,
				timeout: ETH_BASE_WS_TIMEOUT,
				resubscribe: ETH_BASE_WS_RESUBSCRIBE,
				ping: PING_INTERVAL,
				pong: PONG_TIMEOUT,
			},
		};

		if (!eth) {
			return config;
		}

		if (eth.baseUrl) {
			config.baseUrl = eth.baseUrl;
		}

		if (eth.events && Object.keys(eth.events).length) {
			config.events = {
				...config.events,
				...eth.events,
			};
		}

		return config;
	}

}

export { CryptoWrapper as Client };
