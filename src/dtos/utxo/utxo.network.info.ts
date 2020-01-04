export class UtxoNetworkInfo {
	last_block: number;
	count_transactions: string;
	hashrate: number;
	difficulty: number;

	constructor(info: {
		last_block: number;
		count_transactions: string;
		hashrate: number;
		difficulty: number;
	}) {
		this.last_block = info.last_block;
		this.count_transactions = info.count_transactions;
		this.hashrate = info.hashrate;
		this.difficulty = info.difficulty;
	}
}
