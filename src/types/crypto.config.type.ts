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

export type TPublicConfig = {
	token?: string;
	timeout?: number;
	eth?: TCoinConfig;
	klay?: TCoinConfig;
	btc?: TCoinConfig;
	bch?: TCoinConfig;
};
