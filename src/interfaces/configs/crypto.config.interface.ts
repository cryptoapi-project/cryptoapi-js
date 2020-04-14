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

export interface IEthServerConfig extends IServerConfig {
	testnet: {
		api: {
			rinkeby: string;
		};
		events: {
			rinkeby: string;
		};
	};
}

export interface IKlayServerConfig extends IServerConfig {
	testnet: {
		api: {
			baobab: string;
		};
		events: {
			baobab: string;
		};
	};
}

export interface IUtxoServerConfig extends IServerConfig {
	testnet: {
		api: string;
		events: string;
	};
}

export interface IHooksConfig {
	baseUrl: string;
	token: string;
	timeout: number;
}

export interface ICryptoOptions {
	eth: IEthServerConfig;
	klay: IKlayServerConfig;
	btc: IUtxoServerConfig;
	bch: IUtxoServerConfig;
	ltc: IUtxoServerConfig;
	hooks: IHooksConfig;
	timeout: number;
}

export interface ICryptoConfig extends ICryptoOptions {
	token: string;
}
