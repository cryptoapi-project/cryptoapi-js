export class EthRawTransaction {
	nonce: number;
	gas_price: string;
	gas_limit: string;
	to: string;
	value: string;
	data: string;
	v: number;
	r: string;
	s: string;

	constructor(info: {
		nonce: number;
		gas_price: string;
		gas_limit: string;
		to: string;
		value: string;
		data: string;
		v: number;
		r: string;
		s: string;
	}) {
		this.nonce = info.nonce;
		this.gas_price = info.gas_price;
		this.gas_limit = info.gas_limit;
		this.to = info.to;
		this.value = info.value;
		this.data = info.data;
		this.v = info.v;
		this.r = info.r;
		this.s = info.s;
	}
}
