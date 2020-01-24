export class TransactionConfirmationNotification {

	hash: string;
	confirmations: number;

	constructor(notification: {
		hash: string;
		confirmations: number;
	}) {
		this.hash = notification.hash;
		this.confirmations = notification.confirmations;
	}

}

export class BalanceNotification {

	address: string;
	balance: string;

	constructor(notification: {
		address: string;
		balance: string;
	}) {
		this.address = notification.address;
		this.balance = notification.balance;
	}

}

export class TransferNotification {

	type: string;
	execute_address: string;
	from: string;
	to: string;
	value: string;
	address: string;
	block_number: number;
	transaction_hash: string;
	transaction_index: number;
	utc: string;

	constructor(notification: {
		type: string;
		execute_address: string;
		from: string;
		to: string;
		value: string;
		address: string;
		block_number: number;
		transaction_hash: string;
		transaction_index: number;
		utc: string;

	}) {
		this.type = notification.type;
		this.execute_address = notification.execute_address;
		this.from = notification.from;
		this.to = notification.to;
		this.value = notification.value;
		this.address = notification.address;
		this.block_number = notification.block_number;
		this.transaction_hash = notification.transaction_hash;
		this.transaction_index = notification.transaction_index;
		this.utc = notification.utc;
	}

}

export class ContractLogNotification {

	address: string;
	data: string;
	topics: string[];
	log_index: number;
	transaction_hash: string;
	transaction_index: number;
	block_hash: string;
	block_number: number;

	constructor(notification: {
		address: string;
		data: string;
		topics: string[];
		log_index: number;
		transaction_hash: string;
		transaction_index: number;
		block_hash: string;
		block_number: number;
	}) {
		this.address = notification.address;
		this.data = notification.data;
		this.topics = notification.topics;
		this.log_index = notification.log_index;
		this.transaction_hash = notification.transaction_hash;
		this.transaction_index = notification.transaction_index;
		this.block_hash = notification.block_hash;
		this.block_number = notification.block_number;
	}

}

export class TokenBalanceNotification {
	address: string;
	holder: string;
	balance: string;

	constructor(notification: {
		address: string;
		holder: string;
		balance: string;
	}) {
		this.address = notification.address;
		this.holder = notification.holder;
		this.balance = notification.balance;
	}
}
