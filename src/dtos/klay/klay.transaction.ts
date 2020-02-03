export class Signature {
	s: string;
	r: string;
	v: string;

	constructor(info: {
		s: string;
		r: string;
		v: string;
	}) {
		this.s = info.s;
		this.r = info.r;
		this.v = info.v;
	}
}

export class KlayInternalTransaction {
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

export class KlayTransaction {
	readonly block_hash: string;
	readonly block_number: number;
	readonly utc: string;
	readonly from: string;
	readonly gas: number;
	readonly gas_price: string;
	readonly hash: string;
	readonly input: string;
	readonly nonce: number;
	readonly to: string;
	readonly transaction_index: number;
	readonly value: string;
	readonly internal_transactions: KlayInternalTransaction[];
	readonly type: string;
	readonly type_int: number;
	readonly code_format: string|null;
	readonly fee_payer: string|null;
	readonly fee_payer_signatures: Signature[]|null;
	readonly fee_ratio: string|null;
	readonly human_readable: boolean|null;
	readonly key: string|null;
	readonly sender_tx_hash: string|null;
	readonly signatures: Signature[];

	constructor(info: {
		readonly block_hash: string;
		readonly block_number: number;
		readonly utc: string;
		readonly from: string;
		readonly gas: number;
		readonly gas_price: string;
		readonly hash: string;
		readonly input: string;
		readonly nonce: number;
		readonly to: string;
		readonly transaction_index: number;
		readonly value: string;
		readonly internal_transactions: KlayInternalTransaction[];
		readonly type: string;
		readonly type_int: number;
		readonly code_format: string|null;
		readonly fee_payer: string|null;
		readonly fee_payer_signatures: Signature[]|null;
		readonly fee_ratio: string|null;
		readonly human_readable: boolean|null;
		readonly key: string|null;
		readonly sender_tx_hash: string|null;
		readonly signatures: Signature[];
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
		this.internal_transactions = info.internal_transactions;
		this.type = info.type;
		this.type_int = info.type_int;
		this.signatures = info.signatures;
		this.code_format = info.code_format;
		this.fee_payer = info.fee_payer;
		this.fee_payer_signatures = info.fee_payer_signatures;
		this.fee_ratio = info.fee_ratio;
		this.human_readable = info.human_readable;
		this.key = info.key;
		this.key = info.key;
		this.sender_tx_hash = info.sender_tx_hash;
		this.signatures = info.signatures;
	}
}

export class KlayTransfer {
	block_number: number;
	from: string;
	to: string;
	value: string;
	hash: string;
	gas: number;
	gas_price: string;
	internal: boolean;
	utc: string;

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
	}
}

export class KlayTransferHistory {
	readonly addresses: string[];
	readonly limit: number;
	readonly skip: number;
	readonly items: KlayTransfer[];
	readonly count: number;

	constructor(info: {
		addresses: string[];
		limit: number;
		skip: number;
		items: KlayTransfer[];
		count: number;
	}) {
		this.addresses = info.addresses;
		this.limit = info.limit;
		this.skip = info.skip;
		this.items = info.items.map((item) => new KlayTransfer(item));
		this.count = info.count;
	}

}

export class KlayExternalTransactions {
	readonly addresses: string[];
	readonly skip: number;
	readonly limit: number;
	readonly count: number;
	readonly items: KlayTransaction[];

	constructor({ addresses, skip, limit, items, count }: {
		addresses: string[],
		skip: number,
		limit: number,
		count: number,
		items: KlayTransaction[],
	}) {
		this.addresses = addresses;
		this.skip = skip;
		this.limit = limit;
		this.count = count;
		this.items = items.map(((item) => new KlayTransaction(item)));
	}
}

export class KlayFullTransactionReceipt {
	readonly contract_address: string;
	readonly gas_used: number;
	readonly status: boolean;
	readonly logs: KlayReceiptLog[];

	constructor(data: {
		readonly contract_address: string;
		readonly cumulative_gas_used: number;
		readonly gas_used: number;
		readonly status: boolean;
		readonly logs: KlayReceiptLog[];
	}) {
		this.contract_address = data.contract_address;
		this.gas_used = data.gas_used;
		this.status = data.status;
		this.logs = data.logs.map((item) => new KlayReceiptLog(item));
	}
}

export class KlayFullTransaction extends KlayTransaction {
	readonly receipt: KlayFullTransactionReceipt;

	constructor(data: any) {
		super(data as KlayTransaction);
		this.receipt = new KlayFullTransactionReceipt(data.receipt);
	}
}

export class KlayTransactionsBetweenAddresses {
	readonly total: number;
	readonly items: KlayTransaction[];

	constructor({ total, items }: {
		total: number,
		items: KlayTransaction[],
	}) {
		this.total = total;
		this.items = items.map((item) => new KlayTransaction(item));
	}

}

export class KlayReceiptLog {
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

export class KlayTransactionReceipt {
	readonly block_hash: string;
	readonly block_number: number;
	readonly contract_address: string|null;
	readonly gas_used: number;
	readonly logs: KlayReceiptLog[]|null;
	readonly status: boolean;
	readonly from: string;
	readonly hash: string;
	readonly to: string;
	readonly transaction_index: number;

	constructor(info: {
		readonly block_hash: string;
		readonly block_number: number;
		readonly contract_address: string|null;
		readonly gas_used: number;
		readonly cumulative_gas_used: number;
		readonly logs: KlayReceiptLog[]|null;
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
		this.logs = info.logs ? info.logs.map((log) => new KlayReceiptLog(log)) : null;
		this.status = info.status;
		this.from = info.from;
		this.hash = info.hash;
		this.to = info.to;
		this.transaction_index = info.transaction_index;
	}
}
