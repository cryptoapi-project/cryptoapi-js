export class EthSubscribeToken {
	readonly addresses: string[];
	readonly token: string;

	constructor(info: {
		readonly addresses: string[];
		readonly token: string;
	}) {
		this.addresses = info.addresses;
		this.token = info.token;
	}

}
