export class UtxoBlockNotification {
	hash: string;
	bits: number;
	difficulty: number;
	time: string;
	time_normalized: string;
	merkle_root: string;
	nonce: number;
	height: number;
	size: number;
	version: number;
	previous_block_hash: string;
	next_block_hash: string;
	reward: number;
	status: string;
	transaction_count: number;
	transactions: UtxoTransactionNotification[];

	constructor(notification: {
		hash: string;
		bits: number;
		difficulty: number;
		time: string;
		time_normalized: string;
		merkle_root: string;
		nonce: number;
		height: number;
		size: number;
		version: number;
		previous_block_hash: string;
		next_block_hash: string;
		reward: number;
		status: string;
		transaction_count: number;
		transactions: UtxoTransactionNotification[];
	}) {
		this.hash = notification.hash;
		this.bits = notification.bits;
		this.difficulty = notification.difficulty;
		this.time = notification.time;
		this.time_normalized = notification.time_normalized;
		this.merkle_root = notification.merkle_root;
		this.nonce = notification.nonce;
		this.height = notification.height;
		this.size = notification.size;
		this.version = notification.version;
		this.previous_block_hash = notification.previous_block_hash;
		this.next_block_hash = notification.next_block_hash;
		this.reward = notification.reward;
		this.status = notification.status;
		this.transaction_count = notification.transaction_count;
		this.transactions = notification.transactions;
	}

}

export class UtxoTransactionNotification {
	hash: string;
	block_hash: string;
	block_height: number;
	block_time: string;
	block_time_normalized: string;
	mempool_time: string;
	fee: number;
	n_lock_time: number;
	size: number;
	value: number;
	input_count: number;
	output_count: number;
	inputs: Array<{
		previous_transaction_hash: string;
		output_index: number;
		sequence_number: number;
		script: string;
	}>;
	outputs: Array<{
		address: string;
		satoshis: number;
		script: string;
	}>;
	constructor(notification: {
		hash: string;
		block_hash: string;
		block_height: number;
		block_time: string;
		block_time_normalized: string;
		mempool_time: string;
		fee: number;
		n_lock_time: number;
		size: number;
		value: number;
		input_count: number;
		output_count: number;
		inputs: Array<{
			previous_transaction_hash: string;
			output_index: number;
			sequence_number: number;
			script: string;
		}>;
		outputs: Array<{
			address: string;
			satoshis: number;
			script: string;
		}>;
	}) {
		this.hash = notification.hash;
		this.block_hash = notification.block_hash;
		this.block_height = notification.block_height;
		this.block_time = notification.block_time;
		this.block_time_normalized = notification.block_time_normalized;
		this.mempool_time = notification.mempool_time;
		this.fee = notification.fee;
		this.n_lock_time = notification.n_lock_time;
		this.size = notification.size;
		this.value = notification.value;
		this.input_count = notification.input_count;
		this.output_count = notification.output_count;
		this.inputs = notification.inputs;
		this.outputs = notification.outputs;
	}

}
