import { inject, injectable } from 'inversify';

import { AbstractApi } from '@src/abstracts/abstract.api';
import { TYPES_DI } from '@src/constants/inversify.constants';
import { IEthMainInfoApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.main.info.interface';
import { IHttpService } from '@src/interfaces/providers/http.service.interface';
import { TEstimateGasRequest } from '@src/types/eth/estimate.gas.request.type';

@injectable()
export class EthMainInfoApi<TNetworkInfo, TEstimateGasResponse> extends AbstractApi
	implements IEthMainInfoApi<TNetworkInfo, TEstimateGasResponse> {

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
	) {
		super();
	}

	/**
	 * Method to get network information.
	 * @method getNetworkInfo
	 * @return {Promise<TNetworkInfo>>}
	 */
	async getNetworkInfo(): Promise<TNetworkInfo> {
		this._checkConfig();
		const networkInfo = await this.httpService.agent.get(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/network`,
		);
		return networkInfo.data;
	}

	/**
	 * Estimate gas
	 * @method
	 * @name estimateGas
	 * @param {TEstimateGasRequest} transaction
	 * @return {Promise<TEstimateGasResponse>>}
	 */
	async estimateGas(transaction: TEstimateGasRequest): Promise<TEstimateGasResponse> {
		this._checkConfig();
		const estimate = await this.httpService.agent.post(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/estimate-gas`,
			transaction,
		);
		return estimate.data;
	}

}
