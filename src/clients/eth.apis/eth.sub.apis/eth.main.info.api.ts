import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';

import { EthNetworkInfo } from '../../../dtos/eth.network.info';
import { EstimateGasRequest, EstimateGasResponse } from '../../../dtos/eth/estimate.gas.dto';

import { IEthMainInfoApi } from '../../../interfaces/eth.apis/eth.sub.apis/eth.main.info.interface';
import { IHttpService } from '../../../interfaces/providers/http.service.interface';
import { AbstractApi } from '../../../abstracts/abstract.api';

@injectable()
export class EthMainInfoApi extends AbstractApi implements IEthMainInfoApi {

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
	) {
		super();
	}

	/**
	 * Method to get network information.
	 * @method getNetworkInfo
	 * @return {Promise<EthNetworkInfo>>}
	 */
	async getNetworkInfo(): Promise<EthNetworkInfo> {
		this._checkConfig();
		const networkInfo = await this.httpService.agent.get<EthNetworkInfo>(
			`${this.config!.baseUrl}/coins/eth/network`,
		);
		return networkInfo.data;
	}

	/**
	 * Estimate gas
	 * @method
	 * @name estimateGas
	 * @param {EstimateGasRequest} transaction
	 * @return {Promise<EstimateGasResponse>>}
	 */
	async estimateGas(transaction: EstimateGasRequest): Promise<EstimateGasResponse> {
		const estimate = await this.httpService.agent.post<EstimateGasResponse>(
			`${this.config.baseUrl}/coins/eth/estimate-gas`,
			transaction,
		);
		return estimate.data;
	}

}
