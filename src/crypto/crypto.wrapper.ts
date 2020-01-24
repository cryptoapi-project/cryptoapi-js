import { TYPES_DI } from '../constants/inversify.constants';

import { CONFIG_BY_COIN, DEFAULT_TIMEOUT_REQUEST, TCoin } from '../config/capi.lib.config';

import { TPublicConfig } from '../types/crypto.config.type';
import { ICrypto, IPublicCrypto } from '../interfaces/crypto.interface';
import { IServerConfig } from '../interfaces/configs/crypto.config.interface';

import { IApiClient } from '../interfaces/clients/api.client.interface';
import { IEventsClient } from '../interfaces/clients/events.client.interface';

import { diContainer } from '../configuration/di.container';
import { InvalidParamsException } from '../exceptions/library.exceptions/invalid.params.exceptions';

class CryptoWrapper implements IPublicCrypto {
	private crypto: ICrypto;
	api: IApiClient | null;
	events: IEventsClient | null;

	constructor(config: TPublicConfig);
	constructor(token: string, options?: TPublicConfig);
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

		cryptoConfig.eth = this.getConfigByCoin(TCoin.ETH, options.eth);
		cryptoConfig.klay = this.getConfigByCoin(TCoin.KLAY, options.klay);
		cryptoConfig.btc = this.getConfigByCoin(TCoin.BTC, options.btc);
		cryptoConfig.bch = this.getConfigByCoin(TCoin.BCH, options.bch);

		if (!cryptoConfig.token) {
			throw new InvalidParamsException('Token is not exist.');
		}

		this.crypto = diContainer.get<ICrypto>(TYPES_DI.ICrypto);
		this.crypto.configure(cryptoConfig);
		this.api = this.crypto.api;
		this.events = this.crypto.events;
	}

	/**
	 *  @method getConfigByCoin
	 *  @param {TCoin} coin
	 *  @param {IServerConfig} passedConfig
	 */
	private getConfigByCoin(coin: TCoin, passedConfig: IServerConfig) {
		const config: any = {
			coin,
			...CONFIG_BY_COIN[coin],
		};

		if (!passedConfig) {
			return config;
		}

		if (passedConfig.baseUrl) {
			config.baseUrl = passedConfig.baseUrl;
		}

		if (passedConfig.events && Object.keys(passedConfig.events).length) {
			config.events = {
				...config.events,
				...passedConfig.events,
			};
		}

		return config;
	}

}

export { CryptoWrapper as Client };
