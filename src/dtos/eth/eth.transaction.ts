export class EthInternalTransaction {
	readonly to: string;
	readonly from: string;
	readonly value: string;
	readonly input: string;
	readonly is_suicide: boolean;
	readonly type: string;

	constructor(info: {
		readonly to: string;
		readonly from: string;
		readonly value: string;
		readonly input: string;
		readonly is_suicide: boolean;
		readonly type: string;
	}) {
		this.to = info.to;
		this.from = info.from;
		this.value = info.value;
		this.input = info.input;
		this.is_suicide = info.is_suicide;
		this.type = info.type;
	}
}

export class EthTransaction {
	readonly block_hash: string;
	readonly block_number: number;
	readonly utc: string;
	readonly from: string;
	readonly gas: number;
	readonly gas_price: any;
	readonly hash: string;
	readonly input: string;
	readonly nonce: number;
	readonly to: string;
	readonly transaction_index: number;
	readonly value: any;
	readonly v: string;
	readonly s: string;
	readonly r: string;
	readonly internal_transactions: EthInternalTransaction[];
	readonly status?: boolean;

	constructor(info: {
		readonly block_hash: string;
		readonly block_number: number;
		readonly utc: string;
		readonly from: string;
		readonly gas: number;
		readonly gas_price: any;
		readonly hash: string;
		readonly input: string;
		readonly nonce: number;
		readonly to: string;
		readonly transaction_index: number;
		readonly value: any;
		readonly v: string;
		readonly s: string;
		readonly r: string;
		readonly internal_transactions: EthInternalTransaction[];
		readonly status?: boolean;
	}) {
		this.block_hash = info.block_hash;
		this.block_number = info.block_number;
		this.utc = info.utc;
		this.from = info.from;
		this.gas = info.gas;
		this.gas_price = info.gas_price;
		this.hash = info.hash;
		this.input = info.input;
		this.nonce = info.nonce;
		this.to = info.to;
		this.transaction_index = info.transaction_index;
		this.value = info.value;
		this.v = info.v;
		this.s = info.s;
		this.r = info.r;
		this.internal_transactions = info.internal_transactions.map((t) => new EthInternalTransaction(t));
		this.status = info.status;
	}
}

export class EthTransfer {
	block_number: number;
	from: string;
	to: string;
	value: string;
	hash: string;
	gas: number;
	gas_price: string;
	internal: boolean;
	utc: string;
	status?: boolean;

	constructor(data: {
		block_number: number;
		from: string;
		to: string;
		value: string;
		hash: string;
		gas: number;
		gas_price: string;
		internal: boolean;
		utc: string;
		status?: boolean;
	}) {
		this.block_number = data.block_number;
		this.from = data.from;
		this.to = data.to;
		this.value = data.value;
		this.hash = data.hash;
		this.gas = data.gas;
		this.gas_price = data.gas_price;
		this.internal = data.internal;
		this.utc = data.utc;
		this.status = data.status;
	}
}

export class EthTransfers {
	readonly addresses: string[];
	readonly limit: number;
	readonly skip: number;
	readonly items: EthTransfer[];
	readonly count: number;

	constructor(info: {
		addresses: string[],
		limit: number,
		skip: number,
		items: EthTransfer[];
		count: number,
	}) {
		this.addresses = info.addresses;
		this.limit = info.limit;
		this.skip = info.skip;
		this.items = info.items.map((item) => new EthTransfer(item));
		this.count = info.count;
	}

}

export class EthExternalTransactions {
	readonly addresses: string[];
	readonly skip: number;
	readonly limit: number;
	readonly count: number;
	readonly items: EthTransaction[];

	constructor({ addresses, skip, limit, items, count }: {
		addresses: string[],
		skip: number,
		limit: number,
		count: number,
		items: EthTransaction[],
	}) {
		this.addresses = addresses;
		this.skip = skip;
		this.limit = limit;
		this.count = count;
		this.items = items.map(((item) => new EthTransaction(item)));
	}
}

export class EthTransactionReceipt {
	readonly contract_address: string;
	readonly cumulative_gas_used: number;
	readonly gas_used: number;
	readonly status: boolean;
	readonly logs: EthReceiptLog[]|null;

	constructor(data: {
		readonly contract_address: string;
		readonly cumulative_gas_used: number;
		readonly gas_used: number;
		readonly status: boolean;
		readonly logs: EthReceiptLog[];
	}) {
		this.contract_address = data.contract_address;
		this.cumulative_gas_used = data.cumulative_gas_used;
		this.gas_used = data.gas_used;
		this.status = data.status;
		this.logs = data.logs.map((item) => new EthReceiptLog(item));
	}
}

export class EthFullTransaction extends EthTransaction {
	readonly receipt: EthTransactionReceipt;

	constructor(info: any) {
		super(info as EthTransaction);
		this.receipt = new EthTransactionReceipt(info.receipt);
	}
}

export class EthTransactionsBetweenAddresses {
	readonly count: number;
	readonly items: Array<{
		readonly block_hash: string;
		readonly block_number: number;
		readonly utc: string;
		readonly from: string;
		readonly gas: number;
		readonly gas_price: any;
		readonly hash: string;
		readonly input: string;
		readonly nonce: number;
		readonly to: string;
		readonly transaction_index: number;
		readonly value: any;
		readonly v: string;
		readonly s: string;
		readonly r: string;
		readonly internal_transactions: Array<{
			readonly to: string;
			readonly from: string;
			readonly value: string;
			readonly input: string;
			readonly is_suicide: boolean;
			readonly type: string;
		}>;
		readonly status?: boolean;
	}>;

	constructor({ count, items }: {
		count: number,
		items: EthTransaction[];
	}) {
		this.count = count;
		this.items = items.map((item) => new EthTransaction(item));
	}

}

export class EthReceiptLog {
	address: string;
	data: string;
	topics: string[];
	log_index: number;
	transaction_hash: string;
	transaction_index: number;
	block_hash: string;
	block_number: number;

	constructor(info: {
		address: string;
		data: string;
		topics: string[];
		log_index: number;
		transaction_hash: string;
		transaction_index: number;
		block_hash: string;
		block_number: number;
	}) {
		this.address = info.address;
		this.data = info.data;
		this.topics = info.topics;
		this.log_index = info.log_index;
		this.transaction_hash = info.transaction_hash;
		this.transaction_index = info.transaction_index;
		this.block_hash = info.block_hash;
		this.block_number = info.block_number;
	}
}

export class EthFullTransactionReceipt {
	readonly block_hash: string;
	readonly block_number: number;
	readonly contract_address: string | null;
	readonly cumulative_gas_used: number;
	readonly gas_used: number;
	readonly status: boolean;
	readonly from: string;
	readonly hash: string;
	readonly to: string;
	readonly transaction_index: number;
	readonly logs: EthReceiptLog[] | null;

	constructor(info: {
		readonly block_hash: string;
		readonly block_number: number;
		readonly contract_address: string | null;
		readonly gas_used: number;
		readonly cumulative_gas_used: number;
		readonly logs: EthReceiptLog[] | null;
		readonly status: boolean;
		readonly from: string;
		readonly hash: string;
		readonly to: string;
		readonly transaction_index: number;
	}) {
		this.block_hash = info.block_hash;
		this.block_number = info.block_number;
		this.contract_address = info.contract_address;
		this.gas_used = info.gas_used;
		this.cumulative_gas_used = info.cumulative_gas_used;
		this.logs = info.logs ? info.logs.map((log) => new EthReceiptLog(log)) : null;
		this.status = info.status;
		this.from = info.from;
		this.hash = info.hash;
		this.to = info.to;
		this.transaction_index = info.transaction_index;
	}
}
