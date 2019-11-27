// TODO change style filed object to snake_case

export class EthNetworkInfo {
	lastBlock: number;
	countTransactions: string;
	gasPrice: number;
	hashRate: number;
	difficulty: number;

	constructor(info: {
		lastBlock: number,
		countTransactions: string,
		gasPrice: number,
		hashRate: number,
		difficulty: number,
	}) {
		this.lastBlock = info.lastBlock;
		this.countTransactions = info.countTransactions;
		this.gasPrice = info.gasPrice;
		this.hashRate = info.hashRate;
		this.difficulty = info.difficulty;
	}
}
