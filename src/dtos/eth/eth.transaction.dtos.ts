export class EthTransactionByAddresses {
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

export class EthTransactionsIntersection {

	readonly addresses: string[];
	readonly skip: number;
	readonly limit: number;
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
	}>;

	constructor({ addresses, skip, limit, items, count }: {
		addresses: string[],
		skip: number,
		limit: number,
		count: number,
		items: Array<{
			block_hash: string,
			block_number: number,
			utc: string,
			from: string,
			gas: number,
			gas_price: any,
			hash: string,
			input: string,
			nonce: number,
			to: string,
			transaction_index: number,
			value: any,
			v: string,
			s: string,
			r: string,
		}>,
	}) {
		this.addresses = addresses;
		this.skip = skip;
		this.limit = limit;
		this.count = count;
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
		}));
	}

}
