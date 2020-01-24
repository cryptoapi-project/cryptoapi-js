export class AddressSubscription {
	address: string;
	confirmations: number;

	constructor({ address, confirmations }: { address: string, confirmations: number }) {
		this.address = address;
		this.confirmations = confirmations;
	}

}

export class TransactionConfirmationSubscription {
	hash: string;
	confirmations: number;

	constructor({ hash, confirmations }: { hash: string, confirmations: number }) {
		this.hash = hash;
		this.confirmations = confirmations;
	}

}

export class TokenSubscription {
	token: string;
	address: string;
	confirmations: number;

	constructor({ token, address, confirmations }: { token: string, address: string, confirmations: number },
	) {
		this.token = token;
		this.address = address;
		this.confirmations = confirmations;
	}

}

export class ContractLogSubscription {

	address: string;
	confirmations?: number;
	from?: number;
	to?: number;
	topics?: string[];

	constructor({ address, from, to, topics, confirmations }: {
		address: string,
		confirmations: number,
		from: number,
		to: number,
		topics: string[],
	}) {
		this.address = address;
		this.confirmations = confirmations;
		this.from = from;
		this.to = to;
		this.topics = topics;
	}

}
