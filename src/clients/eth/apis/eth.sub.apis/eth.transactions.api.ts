import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { TYPES_DI } from '../../../../constants/inversify.constants';

import { TPaginationOptions } from '../../../../types/paginations.options.type';

import { IEthTransactionsApi } from '../../../../interfaces/clients/eth/apis/eth.sub.apis/eth.transactions.interface';
import { IUrlHelper } from '../../../../interfaces/providers/helpers/url.helper.interface';
import { IValidateHelper } from '../../../../interfaces/providers/helpers/validate.helper.interface';
import { IHttpService } from '../../../../interfaces/providers/http.service.interface';

import { AbstractApi } from '../../../../abstracts/abstract.api';
import { InternalLibraryException } from '../../../../exceptions/library.exceptions/internal.library.exception';

@injectable()
export class EthTransactionsApi<
	TTransactionByAddresses, TTransactionsIntersection,
	TFullTransaction, TTransactionsInterAddresses,
	TTransactionReceipt
> extends AbstractApi implements IEthTransactionsApi<
	TTransactionByAddresses, TTransactionsIntersection,
	TFullTransaction, TTransactionsInterAddresses,
	TTransactionReceipt
> {

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IValidateHelper) private readonly validateHelper: IValidateHelper,
		@inject(TYPES_DI.IUrlHelper) private readonly urlHelper: IUrlHelper,
	) {
		super();
	}

	/**
	 * Method to get transactions by addresses.
	 * @method getTransactionsByAddresses
	 * @param {string[]} addresses
	 * @param {boolean} positive?
	 * @param {TPaginationOptions} options?
	 * @return {Promise<TTransactionByAddresses>}
	 */
	async getTransactionsByAddresses(
		addresses: string[],
		positive: boolean = false,
		options: TPaginationOptions = {
			skip: 0,
			limit: 100,
		},
	): Promise<TTransactionByAddresses> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses) || !addresses.length) {
			throw new InternalLibraryException('Addresses are required.');
		}

		const query = `${this.urlHelper.addOptionsToUrl('', options)}&positive=${positive}`;

		const transactionsInfo = await this.httpService.agent.get(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/addresses/${addresses.join(',')}/transfers${query}`,
		);
		//  new EthTransactionByAddresses(transactionsInfo.data);
		return transactionsInfo.data;
	}

	/**
	 * Get transactions interception by addresses
	 * @method getTransactionsIntersection
	 * @param {string[]} addresses
	 * @param {TPaginationOptions} options?
	 * @return {Promise<EthTransactionsIntersection>}
	 */
	async getTransactionsIntersection(
		addresses: string[],
		options?: TPaginationOptions,
	): Promise<TTransactionsIntersection> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses) || !addresses.length) {
			throw new InternalLibraryException('Addresses are required.');
		}

		const query = options ? this.urlHelper.addOptionsToUrl('', options) : '';
		const transactionsInfo = await this.httpService.agent.get(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/addresses/${addresses.join(',')}/transactions${query}`,
		);
		// new EthTransactionsIntersection();
		return transactionsInfo.data;
	}

	/**
	 * Get transactions from one address to another
	 * @method getTransactionsInterAddresses
	 * @param {string} from
	 * @param {string} to
	 * @param {TPaginationOptions} options?
	 * @return {Promise<TTransactionsInterAddresses>}
	 */
	async getTransactionsInterAddresses(
		from: string,
		to: string,
		options?: TPaginationOptions,
	): Promise<TTransactionsInterAddresses> {
		this._checkConfig();

		const query = this.urlHelper.addOptionsToUrl('', {from, to, ...options});
		const transactionsInfo = await this.httpService.agent.get(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/transactions${query}`,
		);
		// new EthTransactionsInterAddresses(transactionsInfo.data);
		return transactionsInfo.data;
	}

	/**
	 *  Get full transaction info by hash.
	 * @method getFullTransactionInfo
	 * @param {string} hash
	 * @return {Promise<TFullTransaction>}
	 */
	async getFullTransactionInfo(hash: string): Promise<TFullTransaction> {
		this._checkConfig();

		const transaction = await this.httpService.agent.get(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/transactions/${hash}`,
		);
		// new FullEthTransaction();
		return transaction.data;
	}

	/**
	 *  Get transaction receipt by hash.
	 * @method getTransactionReceipt
	 * @param {string} hash
	 * @return {Promise<TTransactionReceipt>}
	 */
	async getTransactionReceipt(hash: string): Promise<TTransactionReceipt> {
		this._checkConfig();

		const transaction = await this.httpService.agent.get(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/transactions/receipt/${hash}`,
		);
		// new EthTransactionReceipt(transaction.data);
		return transaction.data;
	}

}
