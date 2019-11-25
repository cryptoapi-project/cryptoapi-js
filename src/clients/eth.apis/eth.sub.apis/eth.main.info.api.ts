import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';

import { EthNetworkInfo } from '../../../dtos/eth.network.info';

import { IEthMainInfoApi } from '../../../interfaces/eth.apis/eth.sub.apis/eth.main.info.interface';
import { IHttpService } from '../../../interfaces/providers/http.service.interface';
import { IServerConfig } from '../../../interfaces/configs/crypto.config.interface';
import { ServerConfig } from '../../../dtos/crypto.config';

@injectable()
export class EthMainInfoApi implements IEthMainInfoApi {
	config: IServerConfig = new ServerConfig();

	constructor(
		@inject(TYPES_DI.IHttpService)
		private readonly httpService: IHttpService,
	) {}

	/**
	 * Method to get network information.
	 * @method
	 * @name getNetworkInfo
	 * @return {Promise<EthNetworkInfo>>}
	 */
	async getNetworkInfo(): Promise<EthNetworkInfo> {
		const networkInfo = await this.httpService.agent.get<EthNetworkInfo>(
			`${this.config.baseUrl}/coins/eth/network`,
		);
		return networkInfo.data;
	}
}
