export class EthContract {
	bytecode: string;

	constructor(info: {
		bytecode: string;
	}) {
		this.bytecode = info.bytecode;
	}
}

export class EthContractCall {
	sender: string;
	amount: number;
	bytecode: string;

	constructor(info: {
		sender: string;
		amount: number;
		bytecode: string;
	}) {
		this.sender = info.sender;
		this.amount = info.amount;
		this.bytecode = info.bytecode;
	}
}
