import 'reflect-metadata';
import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';

import { EthRawTransaction } from '../../../dtos/eth/eth.raw.transaction';
import { IEthRawTransactionApi } from '../../../interfaces/eth.apis/eth.sub.apis/eth.raw.transaction.interface';

import { IHttpService } from '../../../interfaces/providers/http.service.interface';
import { AbstractApi } from '../../../abstracts/abstract.api';

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
	 * @param {string} tx
	 * @return {EthRawTransaction}
	 */
	async decodeRawTransaction(tx: string): Promise<EthRawTransaction> {
		this._checkConfig();

		const transaction = await this.httpService.agent.post<EthRawTransaction>(
			`${this.config!.baseUrl}/coins/eth/transactions/raw/decode`,
			{tx},
		);
		return new EthRawTransaction(transaction.data);
	}
}
