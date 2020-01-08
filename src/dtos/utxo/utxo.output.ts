export class UtxoOutput {
	address: string;
	is_coinbase: boolean;
	mint_index: number;
	mint_block_height: number;
	script: string;
	sequence_number: number;
	spent_block_height: number;
	spent_index: number;
	mint_transaction_hash: string|null;
	value: number;
	spent_transaction_hash: string|null;
	mempool_time: Date|null;

	constructor(info: {
		address: string;
		is_coinbase: boolean;
		mint_index: number;
		mint_block_height: number;
		script: string;
		sequence_number: number;
		spent_block_height: number;
		spent_index: number;
		mint_transaction_hash: string|null;
		value: number;
		spent_transaction_hash: string|null;
		mempool_time: Date|null;
	}) {
		this.address = info.address;
		this.is_coinbase = info.is_coinbase;
		this.mint_block_height = info.mint_block_height;
		this.script = info.script;
		this.value = info.value;
		this.mint_index = info.mint_index;
		this.mint_transaction_hash = info.mint_transaction_hash;
		this.spent_block_height = info.spent_block_height;
		this.spent_transaction_hash = info.spent_transaction_hash;
		this.spent_index = info.spent_index;
		this.sequence_number = info.sequence_number;
		this.mempool_time = info.mempool_time;
	}
}
