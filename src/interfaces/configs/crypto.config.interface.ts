export interface IEventsConfig {
	token: string;
	url: string;
	reconnect?: boolean;
	attempts?: number;
	timeout?: number;
	resubscribe?: boolean;
	ping: number;
	pong: number;
}

export interface IServerConfig {
	baseUrl: string;
	events: IEventsConfig;
}

export interface ICryptoOptions {
	eth: IServerConfig;
	timeout: number;
}

export interface ICryptoConfig extends ICryptoOptions {
	token: string;
}
