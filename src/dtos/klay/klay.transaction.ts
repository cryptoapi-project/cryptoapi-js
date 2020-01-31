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
	readonly code_format?: string;
	readonly fee_payer?: string;
	readonly fee_payer_signatures?: Signature[];
	readonly fee_ratio?: string;
	readonly human_readable?: boolean;
	readonly key?: string;
	readonly sender_tx_hash?: string;
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
		readonly code_format?: string;
		readonly fee_payer?: string;
		readonly fee_payer_signatures?: Signature[];
		readonly fee_ratio?: string;
		readonly human_readable?: boolean;
		readonly key?: string;
		readonly sender_tx_hash?: string;
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

		if (info.code_format) {
			this.code_format = info.code_format;
		}
		if (info.fee_payer) {
			this.fee_payer = info.fee_payer;
		}
		if (info.fee_payer_signatures) {
			this.fee_payer_signatures = info.fee_payer_signatures;
		}
		if (info.fee_ratio) {
			this.fee_ratio = info.fee_ratio;
		}
		if (info.human_readable) {
			this.human_readable = info.human_readable;
		}
		if (info.key) {
			this.key = info.key;
		}
		if (info.key) {
			this.key = info.key;
		}
		if (info.sender_tx_hash) {
			this.sender_tx_hash = info.sender_tx_hash;
		}
		if (info.signatures) {
			this.signatures = info.signatures;
		}
	}
}

export class KlayTransactionByAddresses {
	readonly addresses: string[];
	readonly limit: number;
	readonly skip: number;
	readonly items: Array<{
		block_number: number,
		from: string,
		to: string,
		value: string,
		hash: string,
		gas: number,
		gas_price: string,
		internal: boolean,
		utc: string,
	}>;
	readonly count: number;

	constructor(info: {
		addresses: string[],
		limit: number,
		skip: number,
		items: Array<{
			block_number: number,
			from: string,
			to: string,
			value: string,
			hash: string,
			gas: number,
			gas_price: string,
			internal: boolean,
			utc: string,
		}>,
		count: number,
	}) {
		this.addresses = info.addresses;
		this.limit = info.limit;
		this.skip = info.skip;
		this.items = info.items.map((item) => ({
			block_number: item.block_number,
			from: item.from,
			to: item.to,
			value: item.value,
			hash: item.hash,
			gas: item.gas,
			gas_price: item.gas_price,
			internal: item.internal,
			utc: item.utc,
		}));
		this.count = info.count;
	}

}

export class KlayTransactionsIntersection {
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

export class FullKlayTransaction extends KlayTransaction {
	readonly receipt: any;

	constructor(info: {
		readonly receipt: any;
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
		readonly internal_transactions: KlayInternalTransaction[];
	}) {
		super(info);
		this.receipt = info.receipt;
	}
}

export class KlayTransactionsInterAddresses {
	readonly total: number;
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
	}>;

	constructor({ total, items }: {
		total: number,
		items: Array<{
			block_hash: string;
			block_number: number;
			utc: string;
			from: string;
			gas: number;
			gas_price: any;
			hash: string;
			input: string;
			nonce: number;
			to: string;
			transaction_index: number;
			value: any;
			v: string;
			s: string;
			r: string;
			internal_transactions: Array<{
				to: string;
				from: string;
				value: string;
				input: string;
				is_suicide: boolean;
				type: string;
			}>;
		}>;
	}) {
		this.total = total;
		this.items = items.map((item) => ({
			block_hash: item.block_hash,
			block_number: item.block_number,
			utc: item.utc,
			from: item.from,
			gas: item.gas,
			gas_price: item.gas_price,
			hash: item.hash,
			input: item.input,
			nonce: item.nonce,
			to: item.to,
			transaction_index: item.transaction_index,
			value: item.value,
			v: item.v,
			s: item.s,
			r: item.r,
			internal_transactions: item.internal_transactions.map((internal) => ({
				to: internal.to,
				from: internal.from,
				value: internal.value,
				input: internal.input,
				is_suicide: internal.is_suicide,
				type: internal.type,
			})),
		}));
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
	readonly cumulative_gas_used: number;
	readonly gas_used: number;
	readonly status: boolean;
	readonly from: string;
	readonly hash: string;
	readonly to: string;
	readonly transaction_index: number;
	readonly logs: KlayReceiptLog[]|null;

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
		this.cumulative_gas_used = info.cumulative_gas_used;
		this.logs = info.logs ? info.logs.map((log) => new KlayReceiptLog(log)) : null;
		this.status = info.status;
		this.from = info.from;
		this.hash = info.hash;
		this.to = info.to;
		this.transaction_index = info.transaction_index;
	}
}
