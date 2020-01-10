export class EthTokenTransferSubscription {
	token: string;
	address: string;
	confirmations: number;

	constructor({ token, address, confirmations }: { token: string, address: string, confirmations: number }) {
		this.token = token;
		this.address = address;
		this.confirmations = confirmations;
	}

}
