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
	count_transactions: number;

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
		count_transactions: number,
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
		this.count_transactions = info.count_transactions;
	}
}
