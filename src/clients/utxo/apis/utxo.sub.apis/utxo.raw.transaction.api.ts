import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { AbstractApi } from '@src/abstracts/abstract.api';
import { TYPES_DI } from '@src/constants/inversify.constants';
import { UtxoRawTransaction } from '@src/dtos/utxo/utxo.raw.transaction';
import { IUtxoRawTransactionApi } from '@src/interfaces/clients/utxo/apis/utxo.sub.apis/utxo.raw.transaction.interface';
import { IHttpService } from '@src/interfaces/providers/http.service.interface';

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
