export class EthContractInfo {
	bytecode: string;

	constructor(info: {
		bytecode: string;
	}) {
		this.bytecode = info.bytecode;
	}
}
