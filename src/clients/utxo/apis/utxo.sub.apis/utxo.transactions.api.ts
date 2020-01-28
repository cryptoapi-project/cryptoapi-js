import { inject, injectable } from 'inversify';
import qs from 'query-string';
import { AbstractApi } from '../../../../abstracts/abstract.api';
import { TYPES_DI } from '../../../../constants/inversify.constants';
import { FullUtxoTransaction, Transactions } from '../../../../dtos/utxo/utxo.transaction.dtos';
import { IUtxoTransactionsApi } from '../../../../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.transactions.interface';
import { IUrlHelper } from '../../../../interfaces/providers/helpers/url.helper.interface';
import { IValidateHelper } from '../../../../interfaces/providers/helpers/validate.helper.interface';
import { IHttpService } from '../../../../interfaces/providers/http.service.interface';
import { TPaginationOptions } from '../../../../types/paginations.options.type';
import { TTransactionsRequest } from '../../../../types/utxo/utxo.transactions.request';

@injectable()
export class UtxoTransactionsApi extends AbstractApi implements IUtxoTransactionsApi {

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IUrlHelper) private readonly urlHelper: IUrlHelper,
		@inject(TYPES_DI.IValidateHelper) private readonly validateHelper: IValidateHelper,
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

	/**
	 * Get utxo transactions information by params.
	 * @method getTransactions
	 * @param {TTransactionsRequest} params
	 * @param {TPaginationOptions} options?
	 * @return {Promise<FullUtxoTransaction[]>}
	 */
	async getTransactions(params?: TTransactionsRequest, options?: TPaginationOptions) {
		this._checkConfig();

		let query = '';
		const queryObject: any = {};

		const addParamIfNotUndefined = (object: any, value: any, assignParamName: string) => {
			if (typeof value !== 'undefined') {
				object[assignParamName] = value;
			}
			return object;
		};

		if (params) {
			addParamIfNotUndefined(queryObject, params.blockHeightOrHash, 'block_height_or_hash');
			addParamIfNotUndefined(queryObject, params.to, 'to');
			addParamIfNotUndefined(queryObject, params.from, 'from');
		}

		if (options) {
			addParamIfNotUndefined(queryObject, options.skip, 'skip');
			addParamIfNotUndefined(queryObject, options.limit, 'limit');
		}

		if (Object.keys(queryObject).length) {
			query = qs.stringify(queryObject);
		}

		const transactions = await this.httpService.agent.get<Transactions>(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/transactions?${query}`,
		);

		return new Transactions(transactions.data);
	}

}
