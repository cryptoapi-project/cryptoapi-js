export class KlayMainTokenInfo {
	readonly name: string;
	readonly symbol: string;
	readonly decimals: string;
	readonly total_supply: string;

	constructor(info: {
		name: string;
		symbol: string;
		decimals: string;
		total_supply: string;
	}) {
		this.name = info.name;
		this.symbol = info.symbol;
		this.decimals = info.decimals;
		this.total_supply = info.total_supply;
	}
}

export class KlayTokenInfo {
	readonly address: string;
	readonly type: string;
	readonly info: KlayMainTokenInfo;
	readonly create_transaction_hash: string;
	readonly holders_count: number;

	constructor(info: {
		address: string,
		type: string,
		info: KlayMainTokenInfo,
		create_transaction_hash: string,
		holders_count: number,
	}) {
		this.address = info.address;
		this.type = info.type;
		this.info = new KlayMainTokenInfo(info.info);
		this.create_transaction_hash = info.create_transaction_hash;
		this.holders_count = info.holders_count;
	}

}
