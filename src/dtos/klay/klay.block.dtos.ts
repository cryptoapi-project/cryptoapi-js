
export class KlayBlockInfo {
	size: number;
	block_score: string;
	total_block_score: string;
	number: number;
	hash: string;
	parent_hash: string;
	reward: string;
	governance_data: string;
	vote_data: string;
	timestamp_fos: string;
	logs_bloom: string;
	transaction_root: string;
	state_root: string;
	receipts_root: string;
	extra_data: string;
	gas_used: number;
	utc: string;
	count_transactions: number;

	constructor({
		size,
		block_score,
		total_block_score,
		number,
		hash,
		parent_hash,
		reward,
		governance_data,
		vote_data,
		timestamp_fos,
		logs_bloom,
		transaction_root,
		state_root,
		receipts_root,
		extra_data,
		gas_used,
		utc,
		count_transactions,
	}: {
		transactions: string[];
		size: number;
		block_score: string;
		total_block_score: string;
		number: number;
		hash: string;
		parent_hash: string;
		reward: string;
		governance_data: string;
		vote_data: string;
		timestamp_fos: string;
		logs_bloom: string;
		transaction_root: string;
		state_root: string;
		receipts_root: string;
		extra_data: string;
		gas_used: number;
		utc: string;
		count_transactions: number;
	}) {
		this.size = size;
		this.block_score = block_score;
		this.total_block_score = total_block_score;
		this.number = number;
		this.hash = hash;
		this.parent_hash = parent_hash;
		this.reward = reward;
		this.governance_data = governance_data;
		this.vote_data = vote_data;
		this.timestamp_fos = timestamp_fos;
		this.logs_bloom = logs_bloom;
		this.transaction_root = transaction_root;
		this.state_root = state_root;
		this.receipts_root = receipts_root;
		this.extra_data = extra_data;
		this.gas_used = gas_used;
		this.utc = utc;
		this.count_transactions = count_transactions;
	}
}

export class KlayBlocksResponse {
	count: number;
	items: KlayBlockInfo[];
	skip: number;
	limit: number;

	constructor(info: {
		count: number;
		items: KlayBlockInfo[];
		skip: number;
		limit: number;
	}) {
		this.count = info.count;
		this.items = info.items;
		this.skip = info.skip;
		this.limit = info.limit;
	}
}
