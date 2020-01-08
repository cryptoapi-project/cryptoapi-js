export class UtxoRawTransaction {
	hash: string;
	version: number;
	n_lock_time: number;
	inputs: Array<{
		previous_transaction_hash: string;
		output_index: number;
		sequence_number: number;
		script: string;
	}>;
	outputs: Array<{
		satoshis: number;
		script: string;
		script_pub_key: string;
	}>;

	constructor(info: {
		hash: string;
		version: number;
		n_lock_time: number;
		inputs: Array<{
			previous_transaction_hash: string;
			output_index: number;
			sequence_number: number;
			script: string;
		}>;
		outputs: Array<{
			satoshis: number;
			script: string;
			script_pub_key: string;
		}>;
	}) {
		this.hash = info.hash;
		this.version = info.version;
		this.n_lock_time = info.n_lock_time;
		this.inputs = info.inputs;
		this.outputs = info.outputs;
	}
}
