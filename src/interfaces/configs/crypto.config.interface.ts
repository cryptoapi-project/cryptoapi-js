export interface IEventsConfig {
	token: string;
	network?: string;
	url: string;
	reconnect?: boolean;
	attempts?: number;
	timeout?: number;
	resubscribe?: boolean;
	ping: number;
	pong: number;
}

export interface IServerConfig {
	coin: string;
	baseUrl: string;
	events: IEventsConfig;
}

export interface ICryptoOptions {
	eth: IServerConfig;
	btc: IServerConfig;
	bch: IServerConfig;
	timeout: number;
}

export interface ICryptoConfig extends ICryptoOptions {
	token: string;
}
