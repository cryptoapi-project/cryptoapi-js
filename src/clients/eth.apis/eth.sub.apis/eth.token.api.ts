import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';

import { EthTokenInfo } from '../../../dtos/eth/eth.token.info';
import { EthTokenBalance } from '../../../dtos/eth/eth.token.balance';
import { EthTokensByHolder } from '../../../dtos/eth/eth.tokens.by.holder';
import { EthTokenTransfersResponse } from '../../../dtos/eth/eth.transfer.dto';
import { EthTokenSearchRequest, EthTokenSearchResponse } from '../../../dtos/eth/eth.token.search';

import { IEthTokenApi } from '../../../interfaces/eth.apis/eth.sub.apis/eth.token.api.interface';
import { IHttpService } from '../../../interfaces/providers/http.service.interface';

import { IUrlHelper } from 'interfaces/providers/helpers/url.helper.interface';
import { IValidateHelper } from '../../../interfaces/providers/helpers/validate.helper.interface';

import { AbstractApi } from '../../../abstracts/abstract.api';
import { PaginationOptions } from '../../../dtos/paginations.options';
import { BaseLibraryException } from '../../../exceptions/library.exceptions/base.exception';

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
	 * @return {Promise<EthTokenInfo>>}
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
	 * @param {string} holderAddress
	 * @return {Promise<EthTokenBalance>}
	 */
	async getTokenBalanceByAddresses(tokenAddress: string, holderAddress: string): Promise<EthTokenBalance> {
		this._checkConfig();

		const tokenInfo = await this.httpClient.agent.get<EthTokenBalance>(
			`${this.config!.baseUrl}${'/coins/eth/tokens/:token/:address/balance'
				.replace(':token', tokenAddress)
				.replace(':address', holderAddress)}`,
		);
		return new EthTokenBalance(tokenInfo.data);
	}

	/**
	 * Method to get tokens balances by holder address.
	 * @method getTokensBalancesByHolderAddress
	 * @param {string} address
	 * @param {PaginationOptions} options?
	 * @return {Promise<EthTokensByHolder>}
	 */
	async getTokensBalancesByHolderAddress(address: string, options?: PaginationOptions): Promise<EthTokensByHolder> {
		this._checkConfig();

		let url = `${this.config!.baseUrl}${'/coins/eth/tokens/:address/balances'
			.replace(':address', address)}`;
		url = this.urlHelper.addOptionsToUrl(url, options);

		const tokensBalances = await this.httpClient.agent.get<EthTokensByHolder>(url);

		return new EthTokensByHolder(tokensBalances.data);
	}

	/**
	 * Method to get token transfers by token address.
	 * @method getTokenTransfers
	 * @param {string} tokenAddress
	 * @param {string[]} addresses
	 * @param {PaginationOptions} options?
	 * @return {Promise<EthTokenTransfersResponse>}
	 */
	async getTokenTransfers(tokenAddress: string, addresses: string[], options?: PaginationOptions): Promise<EthTokenTransfersResponse> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses)) {
			throw new BaseLibraryException('Addresses must be an array.');
		}

		let url = `${this.config!.baseUrl}${'/coins/eth/tokens/:token'.replace(':token', tokenAddress)}`;
		url += addresses.length ? `/${addresses.join(',')}/transfers` : '/transfers';
		url = this.urlHelper.addOptionsToUrl(url, options);

		const tokenTransfers = await this.httpClient.agent.get<EthTokenTransfersResponse>(url);

		return new EthTokenTransfersResponse(tokenTransfers.data);
	}

	/*
	 * Method to search token.
	 * @method searchToken
	 * @param {EthTokenSearchRequest} searchRequest
	 * @return {Promise<EthTokenSearchResponse>}
	 */
	async searchToken(searchRequest: EthTokenSearchRequest): Promise<EthTokenSearchResponse> {
		this._checkConfig();

		let url = `${this.config!.baseUrl}${'/coins/eth/tokens/search'}`;
		url = this.urlHelper.addOptionsToUrl(url, searchRequest);
		const resultSearch = await this.httpClient.agent.get<EthTokenSearchResponse>(url);

		return new EthTokenSearchResponse(resultSearch.data);
	}
}
