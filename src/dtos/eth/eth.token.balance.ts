export class EthTokenBalance {
	address: string;
	balance: string;
	holder: string;

	constructor(info: {
		address: string;
		balance: string;
		holder: string;
	}) {
		this.address = info.address;
		this.balance = info.balance;
		this.holder = info.holder;
	}
}
