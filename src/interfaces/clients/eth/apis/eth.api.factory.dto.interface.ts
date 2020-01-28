import { EstimateGasResponse } from '../../../../dtos/eth/eth.estimate.gas.dto';
import { EthNetworkInfo } from '../../../../dtos/eth/eth.network.info';

export interface IBaseEthFactoryDto<
	TNetworkInfo, TEstimateGasResponse
> {
	getNetworkInfo(data: any): TNetworkInfo;
	getEstimateGasResponse(data: any): TEstimateGasResponse;
}

export interface IEthFactoryDto extends IBaseEthFactoryDto<EthNetworkInfo, EstimateGasResponse> {}
