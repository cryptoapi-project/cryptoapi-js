class BlockDTO {
	size: number;
	difficulty: number;
	total_difficulty: string;
	uncles: string[];
	number: number;
	hash: string;
	parent_hash: string;
	nonce: string;
	sha3_uncles: string;
	logs_bloom: string;
	transaction_root: string;
	state_root: string;
	receipt_root: string;
	miner: string;
	extra_data: string;
	gas_limit: string;
	gas_used: number;
	utc: string;

	constructor(info: {
		size: number,
		difficulty: number,
		totalDifficulty: string,
		uncles: string[],
		number: number,
		hash: string,
		parentHash: string,
		nonce: string,
		sha3Uncles: string,
		logsBloom: string,
		transactionRoot: string,
		stateRoot: string,
		receiptRoot: string,
		miner: string,
		extraData: string,
		gasLimit: string,
		gasUsed: number,
		utc: string,
	}) {
		this.size = info.size;
		this.difficulty = info.difficulty;
		this.total_difficulty = info.totalDifficulty;
		this.uncles = info.uncles;
		this.number = info.number;
		this.hash = info.hash;
		this.parent_hash = info.parentHash;
		this.nonce = info.nonce;
		this.sha3_uncles = info.sha3Uncles;
		this.logs_bloom = info.logsBloom;
		this.transaction_root = info.transactionRoot;
		this.state_root = info.stateRoot;
		this.receipt_root = info.receiptRoot;
		this.miner = info.miner;
		this.extra_data = info.extraData;
		this.gas_limit = info.gasLimit;
		this.gas_used = info.gasUsed;
		this.utc = info.utc;
	}
}

class TransactionInDTO {
	addresses: string[];
	hash: string;

	constructor(info: {
		addresses: string[];
		hash: string;
	}) {
		this.hash = info.hash;
		this.addresses = info.addresses;
	}
}

class TransactionOutDTO {
	hash: string;
	address: string;

	constructor(info: {
		hash: string;
		address: string;
	}) {
		this.hash = info.hash;
		this.address = info.address;
	}
}

class TransferDTO {
	type: string;
	execute_address: string;
	from: string;
	to: string;
	value: string;
	address: string;
	block_number: number;
	transaction_hash: string;
	transaction_index: number;
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
		this.utc = info.utc;
	}
}

class WebHookLogDTO {
	hook_id: number;
	data: BlockDTO | TransactionInDTO | TransactionOutDTO | TransferDTO;
	status: number;

	constructor(info: {
		hook_id: number,
		data: BlockDTO | TransactionInDTO | TransactionOutDTO | TransferDTO,
		status: number,
	}) {
		this.hook_id = info.hook_id;
		this.data = info.data;
		this.status = info.status;
	}

}

class WebHookEventPaginationOptions {
	start_id: number;
	end_id: number;
	failed: boolean;
	skip: number;
	limit: number;

	constructor(info: {
		start_id: number,
		end_id: number,
		failed: boolean,
		skip: number,
		limit: number,
	}) {
		this.start_id = info.start_id;
		this.end_id = info.end_id;
		this.failed = info.failed;
		this.skip = info.skip;
		this.limit = info.limit;
	}

}

export class WebHookLogOutDTO extends WebHookEventPaginationOptions {
	count: number;
	items: WebHookLogDTO[];

	constructor(data: any) {
		super(data);
		this.count = data.count;
		this.items = data.items;
	}

}
