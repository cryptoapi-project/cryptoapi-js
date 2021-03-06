export class EthContract {
	bytecode: string;

	constructor(info: {
		bytecode: string;
	}) {
		this.bytecode = info.bytecode;
	}
}

export class EthContractLog {
	readonly address: string;
	readonly data: string;
	readonly topics: string[];
	readonly log_index: number;
	readonly transaction_hash: string;
	readonly transaction_index: number;
	readonly block_hash: string;
	readonly block_number: number;
	readonly id: string;

	constructor(info: {
		address: string;
		data: string;
		topics: string[];
		log_index: number;
		transaction_hash: string;
		transaction_index: number;
		block_hash: string;
		block_number: number;
		id: string;
	}) {
		this.address = info.address;
		this.data = info.data;
		this.topics = info.topics;
		this.log_index = info.log_index;
		this.transaction_hash = info.transaction_hash;
		this.transaction_index = info.transaction_index;
		this.block_hash = info.block_hash;
		this.block_number = info.block_number;
		this.id = info.id;
	}
}
