import { TYPES_DEPENDENCIES } from '../constants/inversify.constants';

import { ICrypto } from '../interfaces/crypto.interface';
import {
	ICryptoConfig,
	ICryptoOptions,
} from '../interfaces/configs/crypto.config.interface';

import { diContainer } from '../configuration/di.container';
import { CryptoConfig } from '../dtos/crypto.config';

class CryptoWrapper implements ICrypto {
	private crypto: ICrypto;
	private config: ICryptoConfig = new CryptoConfig({});

	constructor(config: ICryptoConfig);
	constructor(token: string, options?: ICryptoOptions);
	constructor(token: any, options?: any) {
		let cryptoConfig: ICryptoConfig = new CryptoConfig({});
		if (typeof token === 'string') {
			cryptoConfig.token = token;
		} else {
			cryptoConfig.token = token;
			cryptoConfig = {
				...cryptoConfig,
				...options,
			};
		}
		this.crypto = diContainer.get<ICrypto>(TYPES_DEPENDENCIES.ICrypto);
		this.config = cryptoConfig;
		this.crypto.setConfig(this.config);
	}

	setConfig() {}

	get events() {
		return this.crypto.events;
	}

	get api() {
		return this.crypto.api;
	}
}

export { CryptoWrapper as Crypto };
