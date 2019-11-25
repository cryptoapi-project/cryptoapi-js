import { TYPES_DI } from '../constants/inversify.constants';

import {
	DEFAULT_TIMEOUT_REQUEST,
	ETH_BASE_URL,
} from '../config/capi.lib.config';

import { ICrypto, IPublicCrypto } from '../interfaces/crypto.interface';
import {
	ICryptoConfig,
	ICryptoOptions,
} from '../interfaces/configs/crypto.config.interface';

import { diContainer } from '../configuration/di.container';
import { CryptoConfig } from '../dtos/crypto.config';
import { UnauthorizedException } from '../exceptions/unauthorized.exception';
import { UnprocessableException } from '../exceptions/unprocessable.exception';

class CryptoWrapper implements IPublicCrypto {
	private crypto: ICrypto;

	constructor(config: ICryptoConfig);
	constructor(token: string, options?: ICryptoOptions);
	constructor(token: any, options?: any) {
		const cryptoConfig: ICryptoConfig = new CryptoConfig();

		if (!token) {
			throw new UnprocessableException('Incorrect params.');
		}
		cryptoConfig.token =
			token.token || (typeof token === 'string' && token);

		cryptoConfig.timeout =
			(options && options.timeout) ||
			token.timeout ||
			DEFAULT_TIMEOUT_REQUEST;
		cryptoConfig.eth = {
			baseUrl:
				(options && options.eth && options.eth.baseUrl) ||
				(token.eth && token.eth.baseUrl) ||
				ETH_BASE_URL,
		};

		if (!cryptoConfig.token) {
			throw new UnauthorizedException('Token is not exist.');
		}
		diContainer
			.bind<ICryptoConfig>(TYPES_DI.ICryptoConfig)
			.toConstantValue(cryptoConfig);

		this.crypto = diContainer.get<ICrypto>(TYPES_DI.ICrypto);
		this.crypto.configure(cryptoConfig);
	}

	/**
	 * @property
	 * @name events
	 * @return {IEventsClient}
	 */
	get events() {
		return this.crypto.events;
	}

	/**
	 * @property
	 * @name api
	 * @return {IApiClient}
	 */
	get api() {
		return this.crypto.api;
	}
}

export { CryptoWrapper as Crypto };
