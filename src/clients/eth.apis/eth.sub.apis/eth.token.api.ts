import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';
import { IEthTokenApi } from '../../../interfaces/eth.apis/eth.sub.apis/eth.token.api.interface';

import { EthTokenInfo } from '../../../dtos/eth.token.info';
import { IHttpService } from '../../../interfaces/providers/http.service.interface';
import { AbstractApi } from '../../../abstracts/abstract.api';

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
		return tokenInfo.data;
	}

}
