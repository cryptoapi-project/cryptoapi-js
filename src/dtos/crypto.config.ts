import { injectable } from 'inversify';
import {
	ICryptoConfig,
	IServerConfig,
	IEventsConfig,
} from '../interfaces/configs/crypto.config.interface';

export class ServerConfig {
	baseUrl: string;
	events?: IEventsConfig;

	constructor(
		config: {
			baseUrl: string,
			events?: IEventsConfig,
		},
	) {
		this.baseUrl = config.baseUrl;
		this.events = config.events;
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
