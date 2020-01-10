export class EthBlockNotification {

	size: number;
	difficulty: string;
	total_difficulty: string;
	uncles: string[];
	number: number;
	hash: string;
	parent_hash: string;
	nonce: string;
	sha3_uncles: string;
	logs_bloom: string;
	state_root: string;
	miner: string;
	extra_data: string;
	gas_limit: number;
	gas_used: number;
	utc: string;
	transactions: Array<{
		block_hash: string;
		block_number: number;
		from: string;
		gas: number;
		gas_price: string;
		hash: string;
		input: string;
		nonce: number;
		to: string;
		transaction_index: number;
		value: string;
		v: string;
		r: string;
		s: string;
	}>;

	constructor(notification: {
		size: number;
		difficulty: string;
		total_difficulty: string;
		uncles: string[];
		number: number;
		hash: string;
		parent_hash: string;
		nonce: string;
		sha3_uncles: string;
		logs_bloom: string;
		state_root: string;
		miner: string;
		extra_data: string;
		gas_limit: number;
		gas_used: number;
		utc: string;
		transactions: Array<{
			block_hash: string;
			block_number: number;
			from: string;
			gas: number;
			gas_price: string;
			hash: string;
			input: string;
			nonce: number;
			to: string;
			transaction_index: number;
			value: string;
			v: string;
			r: string;
			s: string;
		}>;

	}) {
		this.size = notification.size;
		this.difficulty = notification.difficulty;
		this.total_difficulty = notification.total_difficulty;
		this.uncles = notification.uncles;
		this.number = notification.number;
		this.hash = notification.hash;
		this.parent_hash = notification.parent_hash;
		this.nonce = notification.nonce;
		this.sha3_uncles = notification.sha3_uncles;
		this.logs_bloom = notification.logs_bloom;
		this.state_root = notification.state_root;
		this.miner = notification.miner;
		this.extra_data = notification.extra_data;
		this.gas_limit = notification.gas_limit;
		this.gas_used = notification.gas_used;
		this.utc = notification.utc;
		this.transactions = notification.transactions.map((tr) => ({
			block_hash: tr.block_hash,
			block_number: tr.block_number,
			from: tr.from,
			gas: tr.gas,
			gas_price: tr.gas_price,
			hash: tr.hash,
			input: tr.input,
			nonce: tr.nonce,
			to: tr.to,
			transaction_index: tr.transaction_index,
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
	gas_price: string;
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
		gas_price: string;
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
		this.gas_price = notification.gas_price;
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

export class EthContractLogNotification {

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
