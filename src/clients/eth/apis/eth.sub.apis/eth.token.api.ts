import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../../constants/inversify.constants';
import { TPaginationOptions } from '../../../../types/paginations.options.type';

import { EthTokenBalance } from '../../../../dtos/eth/eth.token.balance';
import { EthTokenInfo } from '../../../../dtos/eth/eth.token.info';
import { EthTokenSearchRequest, EthTokenSearchResponse } from '../../../../dtos/eth/eth.token.search';
import {
	EthTokenTransfersByAddressesRequest,
	EthTokenTransfersRequest,
	EthTokenTransfersResponse,
} from '../../../../dtos/eth/eth.transfer.dto';

import { IEthTokenApi } from '../../../../interfaces/clients/eth/apis/eth.sub.apis/eth.token.api.interface';
import { IHttpService } from '../../../../interfaces/providers/http.service.interface';

import { IValidateHelper } from '../../../../interfaces/providers/helpers/validate.helper.interface';

import { AbstractApi } from '../../../../abstracts/abstract.api';
import { EthTokenBalanceByHoldersOut } from '../../../../dtos/eth/eth.tokens.by.holders';
import { BaseLibraryException } from '../../../../exceptions/library.exceptions/base.exception';
import { IUrlHelper } from '../../../../interfaces/providers/helpers/url.helper.interface';

@injectable()
export class EthTokenApi extends AbstractApi  implements IEthTokenApi {
	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpClient: IHttpService,
		@inject(TYPES_DI.IUrlHelper) private readonly urlHelper: IUrlHelper,
		@inject(TYPES_DI.IValidateHelper) private readonly validateHelper: IValidateHelper,
	) {
		super();
	}

	/**
	 * Method to get token information by address.
	 * @method getTokenInfoByTokenAddress
	 * @param {string} address
	 * @return {Promise<EthTokenInfo>}
	 */
	async getTokenInfoByTokenAddress(address: string): Promise<EthTokenInfo> {
		this._checkConfig();
		const tokenInfo = await this.httpClient.agent.get<EthTokenInfo>(
			`${this.config!.baseUrl}${'/coins/eth/tokens/:address/info'.replace(':address', address)}`,
		);
		return new EthTokenInfo(tokenInfo.data);
	}

	/**
	 * Method to get balance token by holder and token addresses.
	 * @method getTokenBalanceByAddresses
	 * @param {string} tokenAddress
	 * @param {string} holderAddresses
	 * @return {Promise<EthTokenBalance>}
	 */
	async getTokenBalanceByAddresses(tokenAddress: string, holderAddresses: string[]): Promise<EthTokenBalance> {
		this._checkConfig();

		if (!this.validateHelper.isArray(holderAddresses)) {
			throw new BaseLibraryException('holder addresses must be an array.');
		}

		const tokenInfo = await this.httpClient.agent.get<EthTokenBalance>(
			`${this.config!.baseUrl}${'/coins/eth/addresses/:addresses/balance/tokens/:token'
				.replace(':token', tokenAddress)
				.replace(':addresses', holderAddresses.join(','))}`,
		);
		return new EthTokenBalance(tokenInfo.data);
	}

	/**
	 * Method to get tokens balances by holder address.
	 * @method getTokenBalancesByHolders
	 * @param {string[]} holders
	 * @param {TPaginationOptions} options
	 * @return {Promise<EthTokenBalanceByHoldersOut>}
	 */
	async getTokenBalancesByHolders(holders: string[], options?: TPaginationOptions): Promise<EthTokenBalanceByHoldersOut> {
		this._checkConfig();

		if (!this.validateHelper.isArray(holders)) {
			throw new BaseLibraryException('holders must be an array.');
		}

		let url = `${this.config!.baseUrl}${'/coins/eth/addresses/:addresses/balance/tokens'
			.replace(':addresses', holders.join(','))}`;
		url = this.urlHelper.addOptionsToUrl(url, options);

		const data = await this.httpClient.agent.get<EthTokenBalanceByHoldersOut>(url);

		return  new EthTokenBalanceByHoldersOut(data.data);
	}

	/**
	 * Method to get token transfers by token address.
	 * @method getTokenTransfers
	 * @param {EthTokenTransfersRequest} transfersRequest
	 * @param {TPaginationOptions} options?
	 * @return {Promise<EthTokenTransfersResponse>}
	 */
	async getTokenTransfers(transfersRequest: EthTokenTransfersRequest, options?: TPaginationOptions): Promise<EthTokenTransfersResponse> {
		this._checkConfig();

		if (transfersRequest.addresses && !this.validateHelper.isArray(transfersRequest.addresses)) {
			throw new BaseLibraryException('Addresses must be an array.');
		}

		let url = `${this.config!.baseUrl}${'/coins/eth/tokens/:token'.replace(':token', transfersRequest.tokenAddress)}`;
		url += transfersRequest.addresses?.length ? `/${transfersRequest.addresses?.join(',')}/transfers` : '/transfers';
		url = this.urlHelper.addOptionsToUrl(url, options);

		const tokenTransfers = await this.httpClient.agent.get<EthTokenTransfersResponse>(url);

		return new EthTokenTransfersResponse(tokenTransfers.data);
	}

	/**
	 * Method to get token transfers by token address and addresses.
	 * @method getTokenTransfersByAddresses
	 * @param {EthTokenTransfersByAddressesRequest} transfersRequest
	 * @param {TPaginationOptions} options?
	 * @return {Promise<EthTokenTransfersResponse>}
	 */
	async getTokenTransfersByAddresses(
		transfersRequest: EthTokenTransfersByAddressesRequest,
		options?: TPaginationOptions,
	): Promise<EthTokenTransfersResponse> {
		this._checkConfig();

		if (!this.validateHelper.isArray(transfersRequest.addresses)) {
			throw new BaseLibraryException('Addresses must be an array.');
		}

		let url = `${this.config!.baseUrl}${`/coins/eth/addresses/:addresses/transfers/tokens/:token`
			.replace(':addresses', transfersRequest.addresses.join(','))
			.replace(':token', transfersRequest.tokenAddress)
		}`;
		url = this.urlHelper.addOptionsToUrl(url, options);

		const tokenTransfers = await this.httpClient.agent.get<EthTokenTransfersResponse>(url);

		return new EthTokenTransfersResponse(tokenTransfers.data);
	}

	/**
	 * Method to search token.
	 * @method searchToken
	 * @param {EthTokenSearchRequest} searchRequest
	 * @param {TPaginationOptions} options?
	 * @return {Promise<EthTokenSearchResponse>}
	 */
	async searchToken(searchRequest: EthTokenSearchRequest, options?: TPaginationOptions): Promise<EthTokenSearchResponse> {
		this._checkConfig();

		let url = `${this.config!.baseUrl}${'/coins/eth/tokens/search'}`;
		url = this.urlHelper.addOptionsToUrl(url, { ...searchRequest, ...options });
		const resultSearch = await this.httpClient.agent.get<EthTokenSearchResponse>(url);

		return new EthTokenSearchResponse(resultSearch.data);
	}
}
