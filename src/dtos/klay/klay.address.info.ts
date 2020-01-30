export class KlayAddressInfo {
	address: string;
	balance: string;
	is_contract: boolean;
	type: string;
	count_transactions: number;

	constructor(info: {
		address: string;
		balance: string;
		is_contract: boolean;
		type: string,
		count_transactions: number,
	}) {
		this.address = info.address;
		this.balance = info.balance;
		this.is_contract = info.is_contract;
		this.type = info.type;
		this.count_transactions = info.count_transactions;
	}
}
