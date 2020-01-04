import { FullUtxoTransaction } from './utxo.transaction.dtos';

export class UtxoAddressHistory {
	count: number;
	items: FullUtxoTransaction[];

	constructor(info: {
		count: number;
		items: FullUtxoTransaction[];
	}) {
		this.count = info.count;
		this.items = info.items;
	}
}
