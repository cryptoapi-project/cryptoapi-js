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

export class EthContractLogSubscription {

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
