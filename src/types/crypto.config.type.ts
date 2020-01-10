export type TPublicConfig = {
	token?: string;
	timeout?: number;
	eth?: {
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
	btc?: {
		baseUrl?: string;
	};
};
