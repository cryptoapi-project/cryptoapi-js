import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { AbstractApi } from '@src/abstracts/abstract.api';
import { MAX_LIMIT_HISTORY } from '@src/constants/history.constants';
import { TYPES_DI } from '@src/constants/inversify.constants';
import { InternalLibraryException } from '@src/exceptions/library.exceptions/internal.library.exception';
import { IEthTransactionsApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.transactions.interface';
import { IUrlHelper } from '@src/interfaces/providers/helpers/url.helper.interface';
import { IValidateHelper } from '@src/interfaces/providers/helpers/validate.helper.interface';
import { IHttpService } from '@src/interfaces/providers/http.service.interface';
import { THistoryRequest } from '@src/types/eth/history.request.type';
import { TrxsBetweenAddressesRequest } from '@src/types/eth/trxs.between.addresses.request.type';
import { TPaginationOptions } from '@src/types/paginations.options.type';

@injectable()
export class EthTransactionsApi<
	TTransferHistory, TTransactionsIntersection,
	TFullTransaction, TTransactionsBetweenAddresses,
	TTransactionReceipt
> extends AbstractApi implements IEthTransactionsApi<
	TTransferHistory, TTransactionsIntersection,
	TFullTransaction, TTransactionsBetweenAddresses,
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
	 * Method to get transactions history.
	 * @method getTransactionsHistory
	 * @param {THistoryRequest} data
	 * @param {TPaginationOptions} options?
	 * @return {Promise<TTransferHistory>}
	 */
	async getTransactionsHistory(
		{ addresses, positive}: THistoryRequest = {
			addresses: [],
			positive: false,
		},
		options: TPaginationOptions = {
			skip: 0,
			limit: MAX_LIMIT_HISTORY,
		},
	): Promise<TTransferHistory> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses) || !addresses.length) {
			throw new InternalLibraryException('Addresses are required.');
		}

		const query = `${this.urlHelper.addOptionsToUrl('', options)}&positive=${positive}`;

		const { data } = await this.httpService.agent.get(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/addresses/${addresses.join(',')}/transfers${query}`,
		);
		return data;
	}

	/**
	 * Get External transactions by addresses
	 * @method getExternalTransactionsHistory
	 * @param {string[]} addresses
	 * @param {TPaginationOptions} options?
	 * @return {Promise<TTransactionsIntersection>}
	 */
	async getExternalTransactionsHistory(
		addresses: string[],
		options?: TPaginationOptions,
	): Promise<TTransactionsIntersection> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses) || !addresses.length) {
			throw new InternalLibraryException('Addresses are required.');
		}

		const query = options ? this.urlHelper.addOptionsToUrl('', options) : '';
		const { data } = await this.httpService.agent.get(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/addresses/${addresses.join(',')}/transactions${query}`,
		);
		return data;
	}

	/**
	 * Get transactions from one address to another
	 * @method getTransactionsBetweenAddresses
	 * @param {TrxsBetweenAddressesRequest} data
	 * @param {TPaginationOptions} options?
	 * @return {Promise<TTransactionsBetweenAddresses>}
	 */
	async getTransactionsBetweenAddresses(
		{ from, to }: TrxsBetweenAddressesRequest,
		options?: TPaginationOptions,
	): Promise<TTransactionsBetweenAddresses> {
		this._checkConfig();

		const query = this.urlHelper.addOptionsToUrl('', {from, to, ...options});
		const { data } = await this.httpService.agent.get(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/transactions${query}`,
		);
		return data;
	}

	/**
	 *  Get full transaction info by hash.
	 * @method getFullTransaction
	 * @param {string} hash
	 * @return {Promise<TFullTransaction>}
	 */
	async getFullTransaction(hash: string): Promise<TFullTransaction> {
		this._checkConfig();

		const transaction = await this.httpService.agent.get(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/transactions/${hash}`,
		);
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
		return transaction.data;
	}

}
