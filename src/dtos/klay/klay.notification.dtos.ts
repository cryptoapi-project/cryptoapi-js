export class KlayBlockNotification {

	size: number;
	block_score: string;
	total_block_score: string;
	number: number;
	hash: string;
	parent_hash: string;
	nonce: string;
	reward: string;
	governance_data: string;
	vote_data: string;
	timestamp_fos: string;
	logs_bloom: string;
	transaction_root: string;
	state_root: string;
	receipt_root: string;
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
	}>;

	constructor(notification: {
		size: number;
		block_score: string;
		total_block_score: string;
		number: number;
		hash: string;
		parent_hash: string;
		nonce: string;
		reward: string;
		governance_data: string;
		vote_data: string;
		timestamp_fos: string;
		logs_bloom: string;
		transaction_root: string;
		state_root: string;
		receipt_root: string;
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
		}>;

	}) {
		this.size = notification.size;
		this.block_score = notification.block_score;
		this.total_block_score = notification.total_block_score;
		this.number = notification.number;
		this.hash = notification.hash;
		this.parent_hash = notification.parent_hash;
		this.nonce = notification.nonce;
		this.reward = notification.reward;
		this.governance_data = notification.governance_data;
		this.vote_data = notification.vote_data;
		this.timestamp_fos = notification.timestamp_fos;
		this.logs_bloom = notification.logs_bloom;
		this.transaction_root = notification.transaction_root;
		this.state_root = notification.state_root;
		this.receipt_root = notification.receipt_root;
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
		}));
	}

}

export class KlayTransactionNotification {

	utc: string;
	from: string;
	gas: number;
	gas_price: string;
	hash: string;
	input: string;
	nonce: number;
	to: string;
	value: string;
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
		this.internal_transactions = notification.internal_transactions.map((tr) => ({
			to: tr.to,
			from: tr.from,
			value: tr.value,
			input: tr.input,
			type: tr.type,
		}));
	}

}
