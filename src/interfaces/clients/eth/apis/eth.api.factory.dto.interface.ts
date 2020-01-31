import { EstimateGasResponse } from '@src/dtos/eth/eth.estimate.gas.dto';
import { EthNetworkInfo } from '@src/dtos/eth/eth.network.info';

export interface IBaseEthFactoryDto<
	TNetworkInfo, TEstimateGasResponse
> {
	getNetworkInfo(data: any): TNetworkInfo;
	getEstimateGasResponse(data: any): TEstimateGasResponse;
}

export interface IEthApiFactoryDto extends IBaseEthFactoryDto<EthNetworkInfo, EstimateGasResponse> {}
