export class FullUtxoTransaction {
	block_height: number;
	block_hash: string;
	block_time: Date;
	mempool_time: Date|null;
	fee: number;
	size: number;
	n_lock_time: number;
	value: string;
	hash: string;
	input_count: number;
	output_count: number;
	inputs: Array<{
		previous_transaction_hash: string;
		output_index: number;
		sequence_number: number;
		script: Buffer|null;
		address: string|null;
	}>;
	outputs: Array<{
		address: string;
		satoshis: number;
		script: Buffer|null;
	}>;

	constructor(transaction: {
		block_height: number,
		block_hash: string,
		block_time: Date,
		mempool_time: Date|null,
		fee: number,
		size: number,
		n_lock_time: number,
		value: string,
		hash: string,
		input_count: number,
		output_count: number,
		inputs: Array<{
			previous_transaction_hash: string;
			output_index: number;
			sequence_number: number;
			script: Buffer|null;
			address: string|null;
		}>,
		outputs: Array<{
			address: string;
			satoshis: number;
			script: Buffer|null;
		}>,
	}) {
		this.block_height = transaction.block_height;
		this.block_hash = transaction.block_hash;
		this.block_time = transaction.block_time;
		this.mempool_time = transaction.mempool_time;
		this.fee = transaction.fee;
		this.size = transaction.size;
		this.n_lock_time = transaction.n_lock_time;
		this.value = transaction.value;
		this.hash = transaction.hash;
		this.input_count = transaction.input_count;
		this.output_count = transaction.output_count;
		this.inputs = transaction.inputs;
		this.outputs = transaction.outputs;
	}

}
