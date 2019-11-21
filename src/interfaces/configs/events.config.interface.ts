export interface IEthEventsConfig {
	url: string;
	reconnect?: boolean;
	attempts?: number;
	timeout?: number;
}

export interface IEventsConfig {
	eth: IEthEventsConfig;
}
