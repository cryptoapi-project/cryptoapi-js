export class UtxoBlockInfo {
	height: number;
	hash: string;
	bits: number;
	time: Date;
	merkle_root: string;
	nonce: number;
	size: number;
	version: number;
	previous_block_hash: string;
	next_block_hash: string;
	reward: number;
	transaction_count: number;
	transactions: string[];

	constructor(info: {
		height: number,
		hash: string,
		bits: number,
		time: Date,
		merkle_root: string,
		nonce: number,
		size: number,
		version: number,
		previous_block_hash: string,
		next_block_hash: string,
		reward: number,
		transaction_count: number,
		transactions: string[],
	}) {
		this.height = info.height;
		this.hash = info.hash;
		this.bits = info.bits;
		this.time = info.time;
		this.merkle_root = info.merkle_root;
		this.nonce = info.nonce;
		this.size = info.size;
		this.version = info.version;
		this.previous_block_hash = info.previous_block_hash;
		this.next_block_hash = info.next_block_hash;
		this.reward = info.reward;
		this.transaction_count = info.transaction_count;
		this.transactions = info.transactions;
	}
}
