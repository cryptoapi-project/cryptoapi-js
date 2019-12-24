export class EthNetworkInfo {
	last_block: number;
	count_transactions: string;
	gas_price: number;
	hashrate: number;
	difficulty: number;

	constructor(info: {
		last_block: number,
		count_transactions: string,
		gas_price: number,
		hashrate: number,
		difficulty: number,
	}) {
		this.last_block = info.last_block;
		this.count_transactions = info.count_transactions;
		this.gas_price = info.gas_price;
		this.hashrate = info.hashrate;
		this.difficulty = info.difficulty;
	}
}
