export enum SUBSCRIPTIONS {
	TRANSACTION = 'new_transaction',
	BLOCK = 'new_block',
	TRANSFER = 'new_transfer',
	CONFIRMATION = 'new_confirmation',
	CONTRACT_LOG = 'new_contract_log',
	BALANCE = 'new_balance',
	TOKEN_BALANCE = 'new_token_balance',
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
