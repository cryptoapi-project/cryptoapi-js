export class KlayRawTransaction {
	type: string;
	gas_price: string;
	gas: string;
	from?: string;
	human_readable?: boolean;
	fee_ratio?: string;
	code_format?: string;
	fee_payer?: string;
	payer_v?: string;
	payer_r?: string;
	payer_s?: string;
	fee_payer_signatures?: Array<string[]|string>;
	to: string;
	value: string;
	data: string;
	v: number;
	r: string;
	s: string;
	signatures: Array<string[]|string>;
	nonce: string;

	constructor(data: {
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
	}) {
		this.type = data.type;
		this.nonce = data.nonce;
		this.gas_price = data.gas_price;
		this.gas = data.gas;
		this.to = data.to;
		this.value = data.value;
		this.data = data.data;
		this.v = data.v;
		this.r = data.r;
		this.s = data.s;
		this.signatures = data.signatures;

		if (data.from) {
			this.from = data.from;
		}
		if (data.human_readable) {
			this.human_readable = data.human_readable;
		}
		if (data.fee_ratio) {
			this.fee_ratio = data.fee_ratio;
		}
		if (data.code_format) {
			this.code_format = data.code_format;
		}
		if (data.fee_payer) {
			this.fee_payer = data.fee_payer;
		}
		if (data.payer_v) {
			this.payer_v = data.payer_v;
		}
		if (data.payer_r) {
			this.payer_r = data.payer_r;
		}

		if (data.payer_s) {
			this.payer_s = data.payer_s;
		}
		if (data.fee_payer_signatures) {
			this.fee_payer_signatures = data.fee_payer_signatures;
		}
	}
}
