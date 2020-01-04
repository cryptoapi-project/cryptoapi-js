export class UtxoNetworkInfo {
	last_block: string;
	count_transactions: string;
	hashrate: string;
	difficulty: string;

	constructor(info: {
		last_block: string;
		count_transactions: string;
		hashrate: string;
		difficulty: string;
	}) {
		this.last_block = info.last_block;
		this.count_transactions = info.count_transactions;
		this.hashrate = info.hashrate;
		this.difficulty = info.difficulty;
	}
}
