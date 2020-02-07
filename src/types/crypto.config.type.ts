type TCoinConfig = {
	baseUrl?: string;
	events?: {
		token?: string;
		url?: string;
		reconnect?: boolean;
		attempts?: number;
		timeout?: number;
		resubscribe?: boolean;
		ping?: number;
		pong?: number;
		network?: string;
	};
};

type TEthConfig = TCoinConfig & {
	testnet?: {
		api?: {
			rinkeby?: string;
			// ropsten?: string;
			// kovan?: string;
		};
		events?: {
			rinkeby?: string;
		};
	};
};

type TKlayConfig = TCoinConfig & {
	testnet?: {
		api?: {
			baobab?: string;
		};
		events?: {
			baobab?: string;
		};
	};
};

type TUtxoConfig = TCoinConfig & {
	testnet?: {
		api?: string;
		events?: string;
	};
};

export type TPublicConfig = {
	token?: string;
	timeout?: number;
	eth?: TEthConfig;
	klay?: TKlayConfig;
	btc?: TUtxoConfig;
	bch?: TUtxoConfig;
};
