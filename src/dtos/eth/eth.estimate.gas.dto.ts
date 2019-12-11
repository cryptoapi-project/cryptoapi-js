export class EstimateGasResponse {
	estimate_gas: number;
	gas_price: string;
	nonce: number;

	constructor({ estimate_gas, gas_price, nonce }: {
		estimate_gas: number,
		gas_price: string,
		nonce: number,
	}) {
		this.estimate_gas = estimate_gas;
		this.gas_price = gas_price;
		this.nonce = nonce;
	}
}
