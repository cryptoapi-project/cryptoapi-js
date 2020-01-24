export enum TCoin {
	ETH = 'eth',
	BTC = 'btc',
	BCH = 'bch',
	KLAY = 'klay',
}

export const DEFAULT_TIMEOUT_REQUEST = 30000;

export const BASE_HTTP_URL = 'https://697-crypto-api.pixelplex-test.by/api/v1';

export const BASE_WS_RECONNECT = true;
export const BASE_WS_ATTEMPTS = 5;
export const BASE_WS_TIMEOUT = 1000;
export const BASE_WS_RESUBSCRIBE = true;

const WS_URLS = {
	[TCoin.ETH]: 'wss://697-crypto-api.pixelplex-test.by/ws/eth',
	[TCoin.BTC]: 'wss://697-crypto-api.pixelplex-test.by/ws/btc',
	[TCoin.BCH]: 'wss://697-crypto-api.pixelplex-test.by/ws/bch',
	[TCoin.KLAY]: 'wss://697-crypto-api.pixelplex-test.by/ws/klay',
};

export const BASE_CONFIG = {
	baseUrl: BASE_HTTP_URL,
	events: {
		reconnect: BASE_WS_RECONNECT,
		attempts: BASE_WS_ATTEMPTS,
		timeout: BASE_WS_TIMEOUT,
		resubscribe: BASE_WS_RESUBSCRIBE,
	},
};

export const ETH_CONFIG = {
	...BASE_CONFIG,
	events: {
		...BASE_CONFIG.events,
		url: WS_URLS[TCoin.ETH],
	},
};

export const KLAY_CONFIG = {
	...BASE_CONFIG,
	events: {
		...BASE_CONFIG.events,
		url: WS_URLS[TCoin.KLAY],
	},
};

export const BTC_CONFIG = {
	...BASE_CONFIG,
	events: {
		...BASE_CONFIG.events,
		network: 'testnet',
		url: WS_URLS[TCoin.BTC],
	},
};

export const BCH_CONFIG = {
	...BASE_CONFIG,
	events: {
		...BASE_CONFIG.events,
		network: 'testnet',
		url: WS_URLS[TCoin.BCH],
	},
};

export const CONFIG_BY_COIN = {
	[TCoin.ETH]: ETH_CONFIG,
	[TCoin.KLAY]: KLAY_CONFIG,
	[TCoin.BTC]: BTC_CONFIG,
	[TCoin.BCH]: BCH_CONFIG,
};
