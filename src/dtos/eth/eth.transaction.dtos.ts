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
