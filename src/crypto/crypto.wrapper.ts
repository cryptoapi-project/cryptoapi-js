import { TYPES_DI } from '../constants/inversify.constants';

import {
	DEFAULT_TIMEOUT_REQUEST,
	ETH_BASE_URL,
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
		const config: any = {};

		config.baseUrl = (eth && eth.baseUrl) || ETH_BASE_URL;

		if (eth && eth.events) {
			config.events = {
				url: eth.events.url,
				reconnect: eth.events.reconnect,
				attempts: eth.events.attempts,
				timeout: eth.events.timeout,
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
