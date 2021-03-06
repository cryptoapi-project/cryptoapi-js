export class EthBlockInfo {
	size: number;
	difficulty: number;
	total_difficulty: number;
	uncles: string[];
	number: number;
	hash: string;
	parent_hash: string;
	nonce: string;
	sha3_uncles: string;
	logs_bloom: string;
	transaction_root: string;
	state_root: string;
	receipts_root: string;
	miner: string;
	mix_hash: string;
	extra_data: string;
	gas_limit: number;
	gas_used: number;
	utc: string;
	count_transactions: number;

	constructor({
		size,
		difficulty,
		total_difficulty,
		uncles,
		number,
		hash,
		parent_hash,
		nonce,
		sha3_uncles,
		logs_bloom,
		transaction_root,
		state_root,
		receipts_root,
		miner,
		mix_hash,
		extra_data,
		gas_limit,
		gas_used,
		utc,
		count_transactions,
	}: {
		size: number,
		difficulty: number,
		total_difficulty: number,
		uncles: string[],
		number: number,
		hash: string,
		parent_hash: string,
		nonce: string,
		sha3_uncles: string,
		logs_bloom: string,
		transaction_root: string,
		state_root: string,
		receipts_root: string,
		miner: string,
		mix_hash: string,
		extra_data: string,
		gas_limit: number,
		gas_used: number,
		utc: string,
		count_transactions: number,
	}) {
		this.size = size;
		this.difficulty = difficulty;
		this.total_difficulty = total_difficulty;
		this.uncles = uncles;
		this.number = number;
		this.hash = hash;
		this.parent_hash = parent_hash;
		this.nonce = nonce;
		this.sha3_uncles = sha3_uncles;
		this.logs_bloom = logs_bloom;
		this.transaction_root = transaction_root;
		this.state_root = state_root;
		this.receipts_root = receipts_root;
		this.miner = miner;
		this.mix_hash = mix_hash;
		this.extra_data = extra_data;
		this.gas_limit = gas_limit;
		this.gas_used = gas_used;
		this.utc = utc;
		this.count_transactions = count_transactions;
	}
}

export class EthBlocksResponse {
	count: number;
	items: EthBlockInfo[];
	skip: number;
	limit: number;

	constructor(info: {
		count: number;
		items: EthBlockInfo[];
		skip: number;
		limit: number;
	}) {
		this.count = info.count;
		this.items = info.items;
		this.skip = info.skip;
		this.limit = info.limit;
	}
}
