export class AddressTransactionSubscription {
	address: string;
	confirmations: number;

	constructor({ address, confirmations }: { address: string, confirmations: number }) {
		this.address = address;
		this.confirmations = confirmations;
	}

}

export class TokenTransferSubscription {
	token: string;
	address: string;
	confirmations: number;

	constructor({ token, address, confirmations }: { token: string, address: string, confirmations: number }) {
		this.token = token;
		this.address = address;
		this.confirmations = confirmations;
	}

}

export class TransactionConrimationSubscription {
	hash: string;
	confirmations: number;

	constructor({ hash, confirmations }: { hash: string, confirmations: number }) {
		this.hash = hash;
		this.confirmations = confirmations;
	}

}
