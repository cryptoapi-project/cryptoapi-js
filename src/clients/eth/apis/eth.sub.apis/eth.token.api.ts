import { inject, injectable } from 'inversify';

import { AbstractApi } from '@src/abstracts/abstract.api';
import { TYPES_DI } from '@src/constants/inversify.constants';
import { EthTokenSearchRequest } from '@src/dtos/eth/eth.token.search';
import { BaseLibraryException } from '@src/exceptions/library.exceptions/base.exception';
import { IEthTokenApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.token.api.interface';
import { IUrlHelper } from '@src/interfaces/providers/helpers/url.helper.interface';
import { IValidateHelper } from '@src/interfaces/providers/helpers/validate.helper.interface';
import { IHttpService } from '@src/interfaces/providers/http.service.interface';
import { TTokenBalanceRequest } from '@src/types/eth/token.balance.request.type';
import { TTokenTransfersByAddressesRequest, TTokenTransfersRequest } from '@src/types/eth/token.transfer.request.type';
import { TPaginationOptions } from '@src/types/paginations.options.type';

@injectable()
export class EthTokenApi<
	TTokenInfo,
	TTokenBalanceByHoldersOut,
	TTokenSearchResponse,
	TTokenTransfersResponse
	> extends AbstractApi implements IEthTokenApi<
	TTokenInfo,
	TTokenBalanceByHoldersOut,
	TTokenSearchResponse,
	TTokenTransfersResponse
	> {
	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpClient: IHttpService,
		@inject(TYPES_DI.IUrlHelper) private readonly urlHelper: IUrlHelper,
		@inject(TYPES_DI.IValidateHelper) private readonly validateHelper: IValidateHelper,
	) {
		super();
	}

	/**
	 * Method to get token information by address.
	 * @method getToken
	 * @param {string} address
	 * @return {Promise<TTokenInfo>}
	 */
	async getToken(address: string): Promise<TTokenInfo> {
		this._checkConfig();
		const tokenInfo = await this.httpClient.agent.get<TTokenInfo>(
			`${this.config!.baseUrl}/coins/${this.config!.coin}${'/tokens/:address'.replace(':address', address)}`,
		);

		return tokenInfo.data;
	}

	/**
	 * Method to get balance token by holder and token addresses.
	 * @method getTokenBalanceByAddresses
	 * @param {TTokenBalanceRequest} tokenBalanceRequest
	 * @return {Promise<TTokenBalanceByHoldersOut>}
	 */
	async getTokenBalanceByAddresses({ holderAddresses, tokenAddress }: TTokenBalanceRequest): Promise<TTokenBalanceByHoldersOut> {
		this._checkConfig();

		if (!this.validateHelper.isArray(holderAddresses)) {
			throw new BaseLibraryException('holder addresses must be an array.');
		}

		const tokenInfo = await this.httpClient.agent.get<TTokenBalanceByHoldersOut>(
			`${this.config!.baseUrl}/coins/${this.config!.coin}${'/addresses/:addresses/balance/tokens/:token'
				.replace(':token', tokenAddress)
				.replace(':addresses', holderAddresses.join(','))}`,
		);
		return tokenInfo.data;
	}

	/**
	 * Method to get tokens balances by holder address.
	 * @method getTokenBalancesByHolders
	 * @param {string[]} holders
	 * @param {TPaginationOptions} options
	 * @return {Promise<TTokenBalanceByHoldersOut>}
	 */
	async getTokenBalancesByHolders(holders: string[], options?: TPaginationOptions): Promise<TTokenBalanceByHoldersOut> {
		this._checkConfig();

		if (!this.validateHelper.isArray(holders)) {
			throw new BaseLibraryException('holders must be an array.');
		}

		let url = `${this.config!.baseUrl}/coins/${this.config!.coin}${'/addresses/:addresses/balance/tokens'
			.replace(':addresses', holders.join(','))}`;
		url = this.urlHelper.addOptionsToUrl(url, options);

		const data = await this.httpClient.agent.get<TTokenBalanceByHoldersOut>(url);

		return data.data;
	}

	/**
	 * Method to get token transfers by token address.
	 * @method getTokenTransfers
	 * @param {TTokenTransfersRequest} transfersRequest
	 * @param {TPaginationOptions} options?
	 * @return {Promise<TTokenTransfersResponse>}
	 */
	async getTokenTransfers(transfersRequest: TTokenTransfersRequest, options?: TPaginationOptions): Promise<TTokenTransfersResponse> {
		this._checkConfig();

		if (transfersRequest.addresses && !this.validateHelper.isArray(transfersRequest.addresses)) {
			throw new BaseLibraryException('Addresses must be an array.');
		}

		const addresses = transfersRequest.addresses?.join(',');

		let url = `${this.config!.baseUrl}/coins/${this.config!.coin}${'/tokens/:token/transfers'.replace(':token', transfersRequest.tokenAddress)}`;
		url = this.urlHelper.addOptionsToUrl(url, addresses ? { ...options, addresses } : options);

		const tokenTransfers = await this.httpClient.agent.get<TTokenTransfersResponse>(url);

		return tokenTransfers.data;
	}

	/**
	 * Method to get token transfers by token address and addresses.
	 * @method getTokenTransfersByAddresses
	 * @param {TTokenTransfersByAddressesRequest} transfersRequest
	 * @param {TPaginationOptions} options?
	 * @return {Promise<TTokenTransfersResponse>}
	 */
	async getTokenTransfersByAddresses(
		transfersRequest: TTokenTransfersByAddressesRequest,
		options?: TPaginationOptions,
	): Promise<TTokenTransfersResponse> {
		this._checkConfig();

		if (!this.validateHelper.isArray(transfersRequest.addresses)) {
			throw new BaseLibraryException('Addresses must be an array.');
		}

		let url = `${this.config!.baseUrl}/coins/${this.config!.coin}${`/addresses/:addresses/transfers/tokens/:token`
			.replace(':addresses', transfersRequest.addresses.join(','))
			.replace(':token', transfersRequest.tokenAddress)
			}`;
		url = this.urlHelper.addOptionsToUrl(url, options);

		const tokenTransfers = await this.httpClient.agent.get<TTokenTransfersResponse>(url);

		return tokenTransfers.data;
	}

	/**
	 * Method to search token.
	 * @method searchToken
	 * @param {EthTokenSearchRequest} searchRequest
	 * @param {TPaginationOptions} options?
	 * @return {Promise<TTokenSearchResponse>}
	 */
	async searchToken(searchRequest: EthTokenSearchRequest, options?: TPaginationOptions): Promise<TTokenSearchResponse> {
		this._checkConfig();

		let url = `${this.config!.baseUrl}/coins/${this.config!.coin}${'/tokens/search'}`;
		url = this.urlHelper.addOptionsToUrl(url, { ...searchRequest, ...options });
		const resultSearch = await this.httpClient.agent.get<TTokenSearchResponse>(url);

		return resultSearch.data;
	}
}
