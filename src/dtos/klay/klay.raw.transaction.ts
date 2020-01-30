export class KlayRawTransaction {
	type: string;
	gas_price: string;
	gas: string;
	from: string;
	human_readable: boolean;
	fee_ratio: string;
	code_format: string;
	fee_payer: string;
	payer_v: string;
	payer_r: string;
	payer_s: string;
	fee_payer_signatures: Array<string[]|string>;
	to: string;
	value: string;
	data: string;
	v: number;
	r: string;
	s: string;
	signatures: Array<string[]|string>;
	nonce: string;

	constructor(data: {
		type: string,
		nonce: string,
		gas_price: string,
		gas: string,
		from: string,
		human_readable: boolean,
		feeRatio: string,
		codeFormat: string,
		feePayer: string,
		payerV: string,
		payerR: string,
		payerS: string,
		fee_payer_signatures: Array<string|string[]>,
		to: string,
		value: string;
		data: string,
		v: number,
		r: string,
		s: string,
		signatures: Array<string|string[]>,
	}) {
		this.type = data.type;
		this.nonce = data.nonce;
		this.gas_price = data.gas_price;
		this.gas = data.gas;
		this.from = data.from;
		this.human_readable = data.human_readable;
		this.fee_ratio = data.feeRatio;
		this.code_format = data.codeFormat;
		this.fee_payer = data.feePayer;
		this.payer_v = data.payerV;
		this.payer_r = data.payerR;
		this.payer_s = data.payerS;
		this.fee_payer_signatures = data.fee_payer_signatures;
		this.to = data.to;
		this.value = data.value;
		this.data = data.data;
		this.v = data.v;
		this.r = data.r;
		this.s = data.s;
		this.signatures = data.signatures;
	}
}
