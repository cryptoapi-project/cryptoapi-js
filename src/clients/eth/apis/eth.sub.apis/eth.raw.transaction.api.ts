import 'reflect-metadata';
import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../../constants/inversify.constants';

import { EthRawTransaction } from '../../../../dtos/eth/eth.raw.transaction';
import { IEthRawTransactionApi } from '../../../../interfaces/clients/eth/apis/eth.sub.apis/eth.raw.transaction.interface';
import { AbstractApi } from '../../../../abstracts/abstract.api';
import { IHttpService } from '../../../../interfaces/providers/http.service.interface';

@injectable()
export class EthRawTransactionApi extends AbstractApi  implements IEthRawTransactionApi {
	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
	) {
		super();
	}

	/**
	 * Method decode raw transaction.
	 * @method decodeRawTransaction
	 * @param {string} tr
	 * @return {EthRawTransaction}
	 */
	async decodeRawTransaction(tr: string): Promise<EthRawTransaction> {
		this._checkConfig();

		const transaction = await this.httpService.agent.post<EthRawTransaction>(
			`${this.config!.baseUrl}/coins/eth/transactions/raw/decode`,
			{tx: tr},
		);

		return new EthRawTransaction(transaction.data);
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
			`${this.config!.baseUrl}/coins/eth/transactions/raw/send`,
			{ tx: tr },
		);
		return transaction.data.hash;
	}
}
