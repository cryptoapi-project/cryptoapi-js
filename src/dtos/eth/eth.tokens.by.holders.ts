import { EthTokenBalance } from './eth.token.balance';

export class EthTokenBalanceByHoldersOut {
	count: number;
	items: EthTokenBalance[];

	constructor(info: {
		count: number;
		items: EthTokenBalance[];
	}) {
		this.count = info.count;
		this.items = info.items;
	}
}
