import { EthAddressBalance } from './eth.address.balance';

export class EthTokensByHolder {
	total: number;
	items: EthAddressBalance[];

	constructor(info: {
		total: number;
		items: EthAddressBalance[];
	}) {
		this.total = info.total;
		this.items = info.items;
	}
}
