import { inject, injectable } from 'inversify';
import { AbstractApi } from '../../../../abstracts/abstract.api';
import { TYPES_DI } from '../../../../constants/inversify.constants';
import { IHttpService } from '../../../../interfaces/providers/http.service.interface';
import { IUrlHelper } from '../../../../interfaces/providers/helpers/url.helper.interface';
import { IUtxoTransactionsApi } from '../../../../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.transactions.interface';
import { FullUtxoTransaction } from '../../../../dtos/utxo/utxo.transaction.dtos';
import { IValidateHelper } from '../../../../interfaces/providers/helpers/validate.helper.interface';
import { BaseLibraryException } from '../../../../exceptions/library.exceptions/base.exception';

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
	 *  Get full transaction info by hashes.
	 * @method getTransactionsByHashes
	 * @param {string[]} hashes
	 * @return {Promise<FullUtxoTransaction[]>}
	 */
	async getTransactionsByHashes(hashes: string[]) {
		this._checkConfig();

		if (!this.validateHelper.isArray(hashes) || !hashes.length) {
			throw new BaseLibraryException(`Hashes are required`);
		}

		const joinedHashes = hashes.join(',');
		const transactions = await this.httpService.agent.get<FullUtxoTransaction[]>(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/transactions?hashes=${joinedHashes}`,
		);

		return transactions.data.map((tr) => new FullUtxoTransaction(tr));
	}
}
