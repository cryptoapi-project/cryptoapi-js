export enum SUBSCRIPTIONS {
	TRANSACTION = 'new_transaction',
	BLOCK = 'new_block',
	TRANSFER = 'new_transfer',
	CONFIRMATION = 'new_confirmation',
}

export enum METHODS {
	SUBSCRIBE = 'subscribe',
	UNSUBSCRIBE = 'unsubscribe',
}

export const MAX_CONFIRMATION = 100;
