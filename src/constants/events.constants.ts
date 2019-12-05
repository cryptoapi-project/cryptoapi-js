export enum SUBSCRIPTIONS {
	TRANSACTION = 'new_transaction',
	BLOCK = 'new_block',
	TRANSFER = 'new_transfer',
	CONFIRMATION = 'new_confirmation',
}

export enum METHODS {
	SUBSCRIBE = 'subscribe',
	UNSUBSCRIBE = 'unsubscribe',
	PING = 'ping',
}

export const MAX_CONFIRMATION = 100;

export const RESPONSE_KEYS = ['error', 'result', 'id'];

export const PING_INTERVAL = 60 * 1000; // 1 min
export const PONG_TIMEOUT = 5 * 1000; // 5 sec
