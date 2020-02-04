import { KlayTokenBalance } from './klay.token.balance';

export class KlayTokenBalanceByHoldersOut {
	total: number;
	items: KlayTokenBalance[];

	constructor(info: {
		total: number;
		items: KlayTokenBalance[];
	}) {
		this.total = info.total;
		this.items = info.items;
	}
}
