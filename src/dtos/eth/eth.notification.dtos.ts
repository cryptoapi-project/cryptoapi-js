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
	count_transactions: number;

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
		count_transactions: number;
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
		this.count_transactions = notification.count_transactions;
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
