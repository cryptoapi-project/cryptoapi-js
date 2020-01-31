import { EthBlockInfo, EthBlocksResponse } from '../../../../dtos/eth/eth.block.dtos';
import { EstimateGasResponse } from '../../../../dtos/eth/eth.estimate.gas.dto';
import { EthNetworkInfo } from '../../../../dtos/eth/eth.network.info';

export interface IBaseEthFactoryDto<
	TNetworkInfo,
	TEstimateGasResponse,
	TBlockInfo,
	TBlocksResponse
	> {
	getNetworkInfo(data: any): TNetworkInfo;
	getEstimateGasResponse(data: any): TEstimateGasResponse;

	getBlock(data: any): TBlockInfo;
	getBlocks(data: any): TBlocksResponse;
}

export interface IEthFactoryDto extends IBaseEthFactoryDto<
	EthNetworkInfo,
	EstimateGasResponse,
	EthBlockInfo,
	EthBlocksResponse
	> { }
