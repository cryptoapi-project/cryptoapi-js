import { injectable } from 'inversify';
import {
	ICryptoConfig,
	IServerConfig,
	IEventsConfig,
} from '../interfaces/configs/crypto.config.interface';

export class ServerConfig {
	baseUrl: string;
	events: IEventsConfig;
	coin: string;

	constructor(
		config: {
			coin: string,
			baseUrl: string,
			events: IEventsConfig,
		},
	) {
		this.coin = config.coin;
		this.baseUrl = config.baseUrl;
		this.events = config.events;
	}
}

@injectable()
export class CryptoConfig implements ICryptoConfig {
	token: string;
	timeout: number;
	eth: IServerConfig;
	btc: IServerConfig;
	bch: IServerConfig;

	constructor(
		config: {
			token: string,
			timeout: number,
			eth: IServerConfig,
			btc: IServerConfig;
			bch: IServerConfig;
		},
	) {
		this.token = config.token;
		this.eth = new ServerConfig(config.eth);
		this.btc = new ServerConfig(config.btc);
		this.bch = new ServerConfig(config.bch);
		this.timeout = config.timeout;
	}
}
