export class EthContract {
	bytecode: string;

	constructor(info: {
		bytecode: string;
	}) {
		this.bytecode = info.bytecode;
	}
}
