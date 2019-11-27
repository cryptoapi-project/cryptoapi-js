import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../constants/inversify.constants';

import { IEthApiClient } from '../../interfaces/eth.apis/eth.api.client.interface';
import { IEthMainInfoApi } from '../../interfaces/eth.apis/eth.sub.apis/eth.main.info.interface';
import { IEthTokenApi } from '../../interfaces/eth.apis/eth.sub.apis/eth.token.api.interface';
import { IServerConfig } from '../../interfaces/configs/crypto.config.interface';
import { TryCatch } from '../../providers/decorators/try.catch';

import { EstimateGasRequest, EstimateGasResponse } from '../../dtos/eth/estimate.gas.dto';

@injectable()
export class EthApiClient implements IEthApiClient {
	config: IServerConfig|null = null;

	constructor(
		@inject(TYPES_DI.IEthMainInfoApi) private readonly ethMainInfo: IEthMainInfoApi,
		@inject(TYPES_DI.IEthTokenApi) private readonly tokenInfo: IEthTokenApi,
	) {}

	/**
	 * Set config to eth api.
	 * @method configure
	 * @param {IServerConfig} config
	 * @return {void}
	 */
	configure(config: IServerConfig) {
		this.ethMainInfo.configure(config);
		this.tokenInfo.configure(config);
	}

	/**
	 * Get eth network full information.
	 * @method getNetworkInfo
	 * @return {Promise<EthNetworkInfo>}
	 */
	@TryCatch
	async getNetworkInfo() {
		return this.ethMainInfo.getNetworkInfo();
	}

	/**
	 * Executes a message call or transaction and returns the amount of the gas used
	 * @method
	 * @name estimateGas
	 * @param {EstimateGasRequest} transaction
	 * @return {Promise<EstimateGasResponse>}
	 */
	@TryCatch
	estimateGas(transaction: EstimateGasRequest): Promise<EstimateGasResponse> {
		return this.ethMainInfo.estimateGas(transaction);
	}

	/**
	 * Get eth token information by token address.
	 * @method getTokenInfoByTokenAddress
	 * @param {string} address
	 * @return {Promise<EthNetworkInfo>}
	 */
	@TryCatch
	async getTokenInfoByTokenAddress(address: string) {
		return this.tokenInfo.getTokenInfoByTokenAddress(address);
	}

}
