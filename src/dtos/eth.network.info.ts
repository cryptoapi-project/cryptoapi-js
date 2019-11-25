// TODO change style filed object to snake_case

export class EthNetworkInfo {
	lastBlock: number;
	countTransactions: string;
	gasPrice: number;
	hashRate: number;
	difficulty: number;

	constructor({
		lastBlock = 0,
		countTransactions = '0',
		gasPrice = 0,
		hashRate = 0,
		difficulty = 0,
	}) {
		this.lastBlock = lastBlock;
		this.countTransactions = countTransactions;
		this.gasPrice = gasPrice;
		this.hashRate = hashRate;
		this.difficulty = difficulty;
	}
}
