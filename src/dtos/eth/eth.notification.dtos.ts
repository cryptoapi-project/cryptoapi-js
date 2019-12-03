export class EthBlockNotification {

	size: number;
	difficulty: string;
	totalDifficulty: string;
	uncles: string[];
	number: number;
	hash: string;
	parentHash: string;
	nonce: string;
	sha3Uncles: string;
	logsBloom: string;
	stateRoot: string;
	miner: string;
	extraData: string;
	gasLimit: number;
	gasUsed: number;
	timestamp: number;
	transactions: Array<{
		blockHash: string;
		blockNumber: number;
		from: string;
		gas: number;
		gasPrice: string;
		hash: string;
		input: string;
		nonce: number;
		to: string;
		transactionIndex: number;
		value: string;
		v: string;
		r: string;
		s: string;
	}>;

	constructor(notification: {
		size: number;
		difficulty: string;
		totalDifficulty: string;
		uncles: string[];
		number: number;
		hash: string;
		parentHash: string;
		nonce: string;
		sha3Uncles: string;
		logsBloom: string;
		stateRoot: string;
		miner: string;
		extraData: string;
		gasLimit: number;
		gasUsed: number;
		timestamp: number;
		transactions: Array<{
			blockHash: string;
			blockNumber: number;
			from: string;
			gas: number;
			gasPrice: string;
			hash: string;
			input: string;
			nonce: number;
			to: string;
			transactionIndex: number;
			value: string;
			v: string;
			r: string;
			s: string;
		}>;

	}) {
		this.size = notification.size;
		this.difficulty = notification.difficulty;
		this.totalDifficulty = notification.totalDifficulty;
		this.uncles = notification.uncles;
		this.number = notification.number;
		this.hash = notification.hash;
		this.parentHash = notification.parentHash;
		this.nonce = notification.nonce;
		this.sha3Uncles = notification.sha3Uncles;
		this.logsBloom = notification.logsBloom;
		this.stateRoot = notification.stateRoot;
		this.miner = notification.miner;
		this.extraData = notification.extraData;
		this.gasLimit = notification.gasLimit;
		this.gasUsed = notification.gasUsed;
		this.timestamp = notification.timestamp;
		this.transactions = notification.transactions.map((tr) => ({
			blockHash: tr.blockHash,
			blockNumber: tr.blockNumber,
			from: tr.from,
			gas: tr.gas,
			gasPrice: tr.gasPrice,
			hash: tr.hash,
			input: tr.input,
			nonce: tr.nonce,
			to: tr.to,
			transactionIndex: tr.transactionIndex,
			value: tr.value,
			v: tr.v,
			r: tr.r,
			s: tr.s,
		}));
	}

}

export class EthTransactionNotification {

	utc: string;
	from: string;
	gas: number;
	hash: string;
	input: string;
	nonce: number;
	to: string;
	value: string;
	v: string;
	s: string;
	r: string;
	internal_transactions: Array<{
		to: string;
		from: string;
		value: string;
		input: string;
		type: string;
	}>;

	constructor(notification: {
		utc: string;
		from: string;
		gas: number;
		hash: string;
		input: string;
		nonce: number;
		to: string;
		value: string;
		v: string;
		s: string;
		r: string;
		internal_transactions: Array<{
			to: string;
			from: string;
			value: string;
			input: string;
			type: string;
		}>;
	}) {
		this.utc = notification.utc;
		this.from = notification.from;
		this.gas = notification.gas;
		this.hash = notification.hash;
		this.input = notification.input;
		this.nonce = notification.nonce;
		this.to = notification.to;
		this.value = notification.value;
		this.v = notification.v;
		this.s = notification.s;
		this.r = notification.r;
		this.internal_transactions = notification.internal_transactions.map((tr) => ({
			to: tr.to,
			from: tr.from,
			value: tr.value,
			input: tr.input,
			type: tr.type,
		}));
	}

}

export class EthTransferNotification {

	type: string;
	execute_address: string;
	from: string;
	to: string;
	value: string;
	address: string;
	block_number: number;
	transaction_hash: string;
	transaction_index: number;
	timestamp: string;

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
		timestamp: string;

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
		this.timestamp = notification.timestamp;
	}

}

export class EthTransactionConfirmationNotification {

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
