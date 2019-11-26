import { injectable } from 'inversify';
import {
	ICryptoConfig,
	IServerConfig,
} from '../interfaces/configs/crypto.config.interface';

export class ServerConfig {
	baseUrl: string;

	constructor(
		config: {
			baseUrl: string,
		},
	) {
		this.baseUrl = config.baseUrl;
	}
}

@injectable()
export class CryptoConfig implements ICryptoConfig {
	token: string;
	timeout: number;
	eth: IServerConfig;

	constructor(
		config: {
			token: string,
			timeout: number,
			eth: ServerConfig,
		},
	) {
		this.token = config.token;
		this.eth = config.eth;
		this.timeout = config.timeout;
	}
}
