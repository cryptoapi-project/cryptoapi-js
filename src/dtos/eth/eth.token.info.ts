// TODO totalSupply => total_supply

export class EthTokenInfo {
	readonly address: string;
	readonly type: string;
	readonly name: string;
	readonly symbol: string;
	readonly decimals: string;
	readonly totalSupply: string;
	readonly create_transaction_hash: string;
	readonly holders_count: number;

	constructor(info: {
		address: string,
		type: string,
		name: string,
		symbol: string,
		decimals: string,
		totalSupply: string,
		create_transaction_hash: string,
		holders_count: number,
	}) {
		this.address = info.address;
		this.type = info.type;
		this.name = info.name;
		this.symbol = info.symbol;
		this.decimals = info.decimals;
		this.totalSupply = info.totalSupply;
		this.create_transaction_hash = info.create_transaction_hash;
		this.holders_count = info.holders_count;
	}

}