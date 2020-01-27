import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';
import { TEstimateGasRequest } from '../../../types/eth/estimate.gas.request.type';

import { EthNetworkInfo } from '../../../dtos/eth/eth.network.info';

import { IHttpService } from '../../../interfaces/providers/http.service.interface';
import { AbstractApi } from '../../../abstracts/abstract.api';
import { IApiFactory } from '../api.factory.dto';
import { IMainInfoApi } from '../../../interfaces/clients/eth.api.clients/sub.api.clients/main.info.interface';
import { IMainInfoApiFactoryDTO } from '../sub.api.factories/main.info.factory.dto';

@injectable()
export class MainInfoApi<NetworkInfo, EstimateGasRequest, EstimateGasResponse> extends AbstractApi
	implements IMainInfoApi<NetworkInfo, EstimateGasRequest, EstimateGasResponse> {

	private apiFactory: IMainInfoApiFactoryDTO<NetworkInfo, EstimateGasResponse>|null = null;

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
	) {
		super();
	}

	/**
	 * @method setApiFactory
	 * @param {IApiFactory<NetworkInfo, EstimateGasResponse>} factory
	 */
	setFactory(factory: IApiFactory<NetworkInfo, EstimateGasResponse>) {
		this.apiFactory = factory;
	}

	/**
	 * Method to get network information.
	 * @method getNetworkInfo
	 * @return {Promise<NetworkInfo>>}
	 */
	async getNetworkInfo(): Promise<NetworkInfo> {
		this._checkConfig();
		const networkInfo = await this.httpService.agent.get<EthNetworkInfo>(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/network`,
		);
		return this.apiFactory!.getNetworkInfo(networkInfo.data);
	}

	/**
	 * Estimate gas
	 * @method
	 * @name estimateGas
	 * @param {TEstimateGasRequest} transaction
	 * @return {Promise<EstimateGasResponse>>}
	 */
	async estimateGas(transaction: TEstimateGasRequest): Promise<EstimateGasResponse> {
		this._checkConfig();
		const estimate = await this.httpService.agent.post<EstimateGasResponse>(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/estimate-gas`,
			transaction,
		);
		return this.apiFactory!.getEstimateGasResponse(estimate.data);
	}

}
