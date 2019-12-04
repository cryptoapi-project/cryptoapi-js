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

import { ICrypto, IPublicCrypto } from '../interfaces/crypto.interface';
import {
	ICryptoConfig,
	ICryptoOptions,
	IServerConfig,
} from '../interfaces/configs/crypto.config.interface';

import { diContainer } from '../configuration/di.container';
import { InvalidParamsException } from '../exceptions/library.exceptions/invalid.params.exceptions';

class CryptoWrapper implements IPublicCrypto {
	private crypto: ICrypto;

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
	}

	private getEthConfig(eth: IServerConfig) {
		const config: any = {
			baseUrl: ETH_BASE_HTTP_URL,
			events: {
				url: ETH_BASE_WS_URL,
				reconnect: ETH_BASE_WS_RECONNECT,
				attempts: ETH_BASE_WS_ATTEMPTS,
				timeout: ETH_BASE_WS_TIMEOUT,
				resubscribe: ETH_BASE_WS_RESUBSCRIBE,
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

	/**
	 * @property events
	 * @return {IEventsClient}
	 */
	get events() {
		return this.crypto.events;
	}

	/**
	 * @property api
	 * @return {IApiClient}
	 */
	get api() {
		return this.crypto.api;
	}

}

export { CryptoWrapper as Crypto };
