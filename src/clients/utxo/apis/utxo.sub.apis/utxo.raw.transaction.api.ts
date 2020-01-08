import 'reflect-metadata';
import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../../constants/inversify.constants';

import { AbstractApi } from '../../../../abstracts/abstract.api';
import { IHttpService } from '../../../../interfaces/providers/http.service.interface';
import { IUtxoRawTransactionApi } from '../../../../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.raw.transaction.interface';
import { UtxoRawTransaction } from '../../../../dtos/utxo/utxo.raw.transaction';

@injectable()
export class UtxoRawTransactionApi extends AbstractApi  implements IUtxoRawTransactionApi {
	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
	) {
		super();
	}

	/*
	 * Method to send raw transaction
	 * @method sendRawTransaction
	 * @param {string} tr
	 * @return {Promise<string>}
	 */
	async sendRawTransaction(tr: string): Promise<string> {
		this._checkConfig();
		const transaction = await this.httpService.agent.post(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/transactions/raw/send`,
			{ hash: tr },
		);
		return transaction.data.hash;
	}

	/**
	 * Method decode raw transaction.
	 * @method decodeRawTransaction
	 * @param {string} tr
	 * @return {UtxoRawTransaction}
	 */
	async decodeRawTransaction(tr: string): Promise<UtxoRawTransaction> {
		this._checkConfig();

		const transaction = await this.httpService.agent.post<UtxoRawTransaction>(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/transactions/raw/decode`,
			{ hash: tr },
		);

		return new UtxoRawTransaction(transaction.data);
	}

}
