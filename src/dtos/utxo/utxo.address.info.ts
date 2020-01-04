class AddressBalance {
	spent: string;
	unspent: string;
	confirmed: string;
	unconfirmed: string;

	constructor(info: {
		spent: string;
		unspent: string;
		confirmed: string;
		unconfirmed: string;
	}) {
		this.spent = info.spent;
		this.unspent = info.unspent;
		this.confirmed = info.confirmed;
		this.unconfirmed = info.unconfirmed;
	}
}

export class UtxoAddressInfo {
	address: string;
	balance: AddressBalance;

	constructor(info: {
		address: string;
		balance: AddressBalance;
	}) {
		this.address = info.address;
		this.balance = info.balance;
	}
}
