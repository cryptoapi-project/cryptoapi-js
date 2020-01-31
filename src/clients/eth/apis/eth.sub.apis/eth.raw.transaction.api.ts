import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { AbstractApi } from '@src/abstracts/abstract.api';
import { TYPES_DI } from '@src/constants/inversify.constants';
import { IEthRawTransactionApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.raw.transaction.interface';
import { IHttpService } from '@src/interfaces/providers/http.service.interface';

@injectable()
export class EthRawTransactionApi<TRawTransaction> extends AbstractApi  implements IEthRawTransactionApi<TRawTransaction> {
	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
	) {
		super();
	}

	/**
	 * Method decode raw transaction.
	 * @method decodeRawTransaction
	 * @param {string} tr
	 * @return {TRawTransaction}
	 */
	async decodeRawTransaction(tr: string): Promise<TRawTransaction> {
		this._checkConfig();

		const transaction = await this.httpService.agent.post(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/transactions/raw/decode`,
			{tx: tr},
		);

		//  new EthRawTransaction(transaction.data)
		return transaction.data;
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
			{ tx: tr },
		);
		return transaction.data.hash;
	}
}
