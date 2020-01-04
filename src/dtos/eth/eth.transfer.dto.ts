export class EthTransfer {
	type: string;
	execute_address: string;
	from: string;
	to: string;
	value: string;
	address: string;
	block_number: number;
	transaction_hash: string;
	transaction_index: number;
	log_index: number;
	utc: string;

	constructor(info: {
		type: string;
		execute_address: string;
		from: string;
		to: string;
		value: string;
		address: string;
		block_number: number;
		transaction_hash: string;
		transaction_index: number;
		log_index: number;
		utc: string;
	}) {
		this.type = info.type;
		this.execute_address = info.execute_address;
		this.from = info.from;
		this.to = info.to;
		this.value = info.value;
		this.address = info.address;
		this.block_number = info.block_number;
		this.transaction_hash = info.transaction_hash;
		this.transaction_index = info.transaction_index;
		this.log_index = info.log_index;
		this.utc = info.utc;
	}

}

export class EthTokenTransfersResponse {
	addresses: string[];
	skip: number;
	limit: number;
	items: EthTransfer[];
	count: number;

	constructor(info: {
		addresses: string[];
		skip: number;
		limit: number;
		items: EthTransfer[];
		count: number;
	}) {
		this.addresses = info.addresses;
		this.skip = info.skip;
		this.limit = info.limit;
		this.items = info.items;
		this.count = info.count;
	}

}
