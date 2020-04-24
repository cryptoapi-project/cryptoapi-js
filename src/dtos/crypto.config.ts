import { injectable } from 'inversify';

import {
	ICryptoConfig,
	IEthServerConfig,
	IEventsConfig, IHooksConfig,
	IKlayServerConfig,
	IServerConfig,
	IUtxoServerConfig,
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

export class EthServerConfig extends ServerConfig {
	testnet: {
		api: {
			rinkeby: string,
		},
		events: {
			rinkeby: string,
		},
	};

	constructor(
		config: IServerConfig & {
			testnet: {
				api: {
					rinkeby: string,
				},
				events: {
					rinkeby: string,
				},
			},
		},
	) {
		super(config);

		this.testnet = {
			api: {
				rinkeby: config.testnet.api.rinkeby,
			},
			events: {
				rinkeby: config.testnet.events.rinkeby,
			},
		};
	}
}

export class KlayServerConfig extends ServerConfig {
	testnet: {
		api: {
			baobab: string,
		},
		events: {
			baobab: string,
		},
	};

	constructor(
		config: IServerConfig & {
			testnet: {
				api: {
					baobab: string,
				},
				events: {
					baobab: string,
				},
			},
		},
	) {
		super(config);

		this.testnet = {
			api: {
				baobab: config.testnet.api.baobab,
			},
			events: {
				baobab: config.testnet.events.baobab,
			},
		};
	}
}

export class UtxoServerConfig extends ServerConfig {
	testnet: {
		api: string,
		events: string,
	};

	constructor(
		config: IServerConfig & {
			testnet: {
				api: string,
				events: string,
			},
		},
	) {
		super(config);

		this.testnet = {
			api: config.testnet.api,
			events: config.testnet.events,
		};

	}
}

export class HooksConfig {
	baseUrl: string;
	token: string;
	timeout: number;

	constructor(
		config: {
			baseUrl: string,
			token: string,
			timeout: number,
		},
	) {
		this.baseUrl = config.baseUrl;
		this.token = config.token;
		this.timeout = config.timeout;
	}
}

@injectable()
export class CryptoConfig implements ICryptoConfig {
	token: string;
	timeout: number;
	eth: IEthServerConfig;
	klay: IKlayServerConfig;
	btc: IUtxoServerConfig;
	bch: IUtxoServerConfig;
	ltc: IUtxoServerConfig;
	hooks: IHooksConfig;

	constructor(
		config: {
			token: string;
			timeout: number;
			eth: IEthServerConfig;
			klay: IKlayServerConfig;
			btc: IUtxoServerConfig;
			bch: IUtxoServerConfig;
			ltc: IUtxoServerConfig;
			hooks: HooksConfig;
		},
	) {
		this.token = config.token;
		this.eth = new EthServerConfig(config.eth);
		this.klay = new KlayServerConfig(config.klay);
		this.btc = new UtxoServerConfig(config.btc);
		this.bch = new UtxoServerConfig(config.bch);
		this.ltc = new UtxoServerConfig(config.ltc);
		this.hooks = new HooksConfig(config.hooks);
		this.timeout = config.timeout;
	}
}
