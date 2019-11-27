export class EstimateGasRequest {
	from?: string;
	to?: string;
	value?: string | number;
	data?: string;

	constructor({ from, to, value, data }: {
		from?: string,
		to?: string,
		value?: string | number,
		data?: string,
	}) {
		this.from = from;
		this.to = to;
		this.value = value;
		this.data = data;
	}
}

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
