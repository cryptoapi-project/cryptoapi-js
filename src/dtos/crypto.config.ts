import { injectable } from 'inversify';
import {
	ICryptoConfig,
	IServerConfig,
} from '../interfaces/configs/crypto.config.interface';
import { DEFAULT_TIMEOUT_REQUEST } from '../config/capi.lib.config';

export class ServerConfig {
	baseUrl: string;

	constructor(
		config: ServerConfig = {
			baseUrl: '',
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
		config: CryptoConfig = {
			token: '',
			timeout: DEFAULT_TIMEOUT_REQUEST,
			eth: new ServerConfig(),
		},
	) {
		this.token = config.token;
		this.eth = config.eth;
		this.timeout = config.timeout;
	}
}
