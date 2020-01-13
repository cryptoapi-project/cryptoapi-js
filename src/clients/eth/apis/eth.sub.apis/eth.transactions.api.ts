import 'reflect-metadata';
import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../../constants/inversify.constants';

import {
	EthTransactionByAddresses,
	EthTransactionsIntersection,
	FullEthTransaction,
	EthTransactionsInterAddresses,
	EthTransactionReceipt,
} from '../../../../dtos/eth/eth.transaction.dtos';
import { TPaginationOptions } from '../../../../types/paginations.options.type';

import { IEthTransactionsApi } from '../../../../interfaces/clients/eth/apis/eth.sub.apis/eth.transactions.interface';
import { IValidateHelper } from '../../../../interfaces/providers/helpers/validate.helper.interface';
import { IUrlHelper } from '../../../../interfaces/providers/helpers/url.helper.interface';
import { IHttpService } from '../../../../interfaces/providers/http.service.interface';

import { AbstractApi } from '../../../../abstracts/abstract.api';
import { InternalLibraryException } from '../../../../exceptions/library.exceptions/internal.library.exception';

@injectable()
export class EthTransactionsApi extends AbstractApi implements IEthTransactionsApi {

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
	 * @return {Promise<EthTransactionByAddresses>}
	 */
	async getTransactionsByAddresses(
		addresses: string[],
		positive: boolean = false,
		options: TPaginationOptions = {
			skip: 0,
			limit: 100,
		},
	): Promise<EthTransactionByAddresses> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses) || !addresses.length) {
			throw new InternalLibraryException('Addresses are required.');
		}

		const query = `${this.urlHelper.addOptionsToUrl('', options)}&positive=${positive}`;

		const transactionsInfo = await this.httpService.agent.get<any>(
			`${this.config!.baseUrl}/coins/eth/addresses/${addresses.join(',')}/transfers${query}`,
		);
		return new EthTransactionByAddresses(transactionsInfo.data);
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
	): Promise<EthTransactionsIntersection> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses) || !addresses.length) {
			throw new InternalLibraryException('Addresses are required.');
		}

		const query = options ? this.urlHelper.addOptionsToUrl('', options) : '';
		const transactionsInfo = await this.httpService.agent.get<any>(
			`${this.config!.baseUrl}/coins/eth/addresses/${addresses.join(',')}/transactions${query}`,
		);
		return new EthTransactionsIntersection(transactionsInfo.data);
	}

	/**
	 * Get transactions from one address to another
	 * @method getTransactionsInterAddresses
	 * @param {string} from
	 * @param {string} to
	 * @param {TPaginationOptions} options?
	 * @return {Promise<EthTransactionsInterAddresses>}
	 */
	async getTransactionsInterAddresses(
		from: string,
		to: string,
		options?: TPaginationOptions,
	): Promise<EthTransactionsInterAddresses> {
		this._checkConfig();

		const query = this.urlHelper.addOptionsToUrl('', {from, to, ...options});
		const transactionsInfo = await this.httpService.agent.get<any>(
			`${this.config!.baseUrl}/coins/eth/transactions${query}`,
		);
		return new EthTransactionsInterAddresses(transactionsInfo.data);
	}

	/**
	 *  Get full transaction info by hash.
	 * @method getFullTransactionInfo
	 * @param {string} hash
	 * @return {Promise<FullEthTransaction>}
	 */
	async getFullTransactionInfo(hash: string) {
		this._checkConfig();

		const transaction = await this.httpService.agent.get<FullEthTransaction>(
			`${this.config!.baseUrl}/coins/eth/transactions/${hash}`,
		);

		return new FullEthTransaction(transaction.data);
	}

	/**
	 *  Get transaction receipt by hash.
	 * @method getTransactionReceipt
	 * @param {string} hash
	 * @return {Promise<EthTransactionReceipt>}
	 */
	async getTransactionReceipt(hash: string): Promise<EthTransactionReceipt> {
		this._checkConfig();

		const transaction = await this.httpService.agent.get<EthTransactionReceipt>(
			`${this.config!.baseUrl}/coins/eth/transactions/receipt/${hash}`,
		);

		return new EthTransactionReceipt(transaction.data);
	}

}
