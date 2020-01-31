export class KlayAddressBalance {
	address: string;
	balance: string;

	constructor(data: {
		address: string,
		balance: string,
	}) {
		this.address = data.address;
		this.balance = data.balance;
	}
}
