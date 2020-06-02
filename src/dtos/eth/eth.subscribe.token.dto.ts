export class EthSubscribeToken {
	readonly addresses: string[];
	readonly token: string;
	readonly types: string[];

	constructor(info: {
		readonly addresses: string[];
		readonly token: string;
		readonly types: string[];
	}) {
		this.addresses = info.addresses;
		this.token = info.token;
		this.types = info.types;
	}

}
