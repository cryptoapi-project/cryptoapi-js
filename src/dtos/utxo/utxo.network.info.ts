export class UtxoNetworkInfo {
	last_block: string;
	count_transactions: string;
	hashrate: string;
	difficulty: string;
	estimate_fee: string;

	constructor(info: {
		last_block: string;
		count_transactions: string;
		hashrate: string;
		difficulty: string;
		estimate_fee: string;
	}) {
		this.last_block = info.last_block;
		this.count_transactions = info.count_transactions;
		this.hashrate = info.hashrate;
		this.difficulty = info.difficulty;
		this.estimate_fee = info.estimate_fee;
	}
}
