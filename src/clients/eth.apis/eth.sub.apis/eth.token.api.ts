import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';

import { EthTokenInfo } from '../../../dtos/eth/eth.token.info';
import { EthTokenBalance } from '../../../dtos/eth/eth.token.balance';
import { EthTokensByHolder } from '../../../dtos/eth/eth.tokens.by.holder';

import { IEthTokenApi } from '../../../interfaces/eth.apis/eth.sub.apis/eth.token.api.interface';
import { IHttpService } from '../../../interfaces/providers/http.service.interface';
import { AbstractApi } from '../../../abstracts/abstract.api';
import { PaginationOptions } from '../../../dtos/paginations.options';
import { UrlHelper } from '../../../providers/helpers/UrlHelper';

@injectable()
export class EthTokenApi extends AbstractApi  implements IEthTokenApi {

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpClient: IHttpService,
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
		url = UrlHelper.addOptionsToUrl(url, options);

		const tokensBalances = await this.httpClient.agent.get<EthTokensByHolder>(url);

		return new EthTokensByHolder(tokensBalances.data);
	}

}
