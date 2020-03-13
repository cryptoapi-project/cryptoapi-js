export enum TCoin {
	ETH = 'eth',
	BTC = 'btc',
	BCH = 'bch',
	KLAY = 'klay',
}

export const DEFAULT_TIMEOUT_REQUEST = 30000;

export const BASE_HTTP_URL = 'https://api.apikey.io/api/v1';
export const BASE_TESTNET_HTTP_URL = 'https://testnet-api.apikey.io/api/v1';

export const BASE_HOOKS_HTTP_URL = 'https://api.apikey.io/whooks-api';

export const BASE_WS_RECONNECT = true;
export const BASE_WS_ATTEMPTS = 5;
export const BASE_WS_TIMEOUT = 1000;
export const BASE_WS_RESUBSCRIBE = true;

const WS_URLS = {
	[TCoin.ETH]: 'wss://api.apikey.io/ws/eth',
	[TCoin.BTC]: 'wss://api.apikey.io/ws/btc',
	[TCoin.BCH]: 'wss://api.apikey.io/ws/bch',
	[TCoin.KLAY]: 'wss://api.apikey.io/ws/klay',
};

const TESTNET_WS_URLS = {
	[TCoin.ETH]: {
		rinkeby: 'wss://testnet-api.apikey.io/ws/eth',
	},
	[TCoin.KLAY]: {
		baobab: 'wss://testnet-api.apikey.io/ws/klay',
	},
	[TCoin.BTC]: 'wss://testnet-api.apikey.io/ws/btc',
	[TCoin.BCH]: 'wss://testnet-api.apikey.io/ws/bch',
};

export const BASE_CONFIG = {
	baseUrl: BASE_HTTP_URL,
	events: {
		reconnect: BASE_WS_RECONNECT,
		attempts: BASE_WS_ATTEMPTS,
		timeout: BASE_WS_TIMEOUT,
		resubscribe: BASE_WS_RESUBSCRIBE,
		ping: 30 * 1000,
		pong: 5 * 1000,
	},
};

export const HOOKS_CONFIG = {
	baseUrl: BASE_HOOKS_HTTP_URL,
};

export const ETH_CONFIG = {
	...BASE_CONFIG,
	events: {
		...BASE_CONFIG.events,
		url: WS_URLS[TCoin.ETH],
	},
	testnet: {
		api: {
			rinkeby: BASE_TESTNET_HTTP_URL,
		},
		events: {
			rinkeby: TESTNET_WS_URLS[TCoin.ETH].rinkeby,
		},
	},
};

export const KLAY_CONFIG = {
	...BASE_CONFIG,
	events: {
		...BASE_CONFIG.events,
		url: WS_URLS[TCoin.KLAY],
	},
	testnet: {
		api: {
			baobab: BASE_TESTNET_HTTP_URL,
		},
		events: {
			baobab: TESTNET_WS_URLS[TCoin.KLAY].baobab,
		},
	},
};

export const BTC_CONFIG = {
	...BASE_CONFIG,
	events: {
		...BASE_CONFIG.events,
		network: 'testnet',
		url: WS_URLS[TCoin.BTC],
	},
	testnet: {
		api: BASE_TESTNET_HTTP_URL,
		events: TESTNET_WS_URLS[TCoin.BTC],
	},
};

export const BCH_CONFIG = {
	...BASE_CONFIG,
	events: {
		...BASE_CONFIG.events,
		network: 'testnet',
		url: WS_URLS[TCoin.BCH],
	},
	testnet: {
		api: BASE_TESTNET_HTTP_URL,
		events: TESTNET_WS_URLS[TCoin.BCH],
	},
};

export const CONFIG_BY_COIN = {
	[TCoin.ETH]: ETH_CONFIG,
	[TCoin.KLAY]: KLAY_CONFIG,
	[TCoin.BTC]: BTC_CONFIG,
	[TCoin.BCH]: BCH_CONFIG,
};
