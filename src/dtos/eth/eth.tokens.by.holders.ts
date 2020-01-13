import { EthTokenBalance } from './eth.token.balance';

export class EthTokenBalanceByHoldersOut {
	total: number;
	items: EthTokenBalance[];

	constructor(info: {
		total: number;
		items: EthTokenBalance[];
	}) {
		this.total = info.total;
		this.items = info.items;
	}
}
