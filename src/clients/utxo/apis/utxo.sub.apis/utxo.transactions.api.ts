import { inject, injectable } from 'inversify';
import { AbstractApi } from '../../../../abstracts/abstract.api';
import { TYPES_DI } from '../../../../constants/inversify.constants';
import { IHttpService } from '../../../../interfaces/providers/http.service.interface';
import { IUrlHelper } from '../../../../interfaces/providers/helpers/url.helper.interface';
import { IUtxoTransactionsApi } from '../../../../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.transactions.interface';
import { FullUtxoTransaction } from '../../../../dtos/utxo/utxo.transaction.dtos';

@injectable()
export class UtxoTransactionsApi extends AbstractApi implements IUtxoTransactionsApi {

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IUrlHelper) private readonly urlHelper: IUrlHelper,
	) {
		super();
	}

	/**
	 * Get full utxo transaction information by hash.
	 * @method getFullTransactionInfo
	 * @param {string} hash
	 * @return {Promise<FullUtxoTransaction>}
	 */
	async getFullTransactionInfo(hash: string) {
		this._checkConfig();

		const transaction = await this.httpService.agent.get<FullUtxoTransaction>(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/transactions/${hash}`,
		);

		return new FullUtxoTransaction(transaction.data);
	}
}
