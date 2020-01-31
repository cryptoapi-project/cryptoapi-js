import { injectable } from 'inversify';

import { EthBlockInfo, EthBlocksResponse } from '../../../dtos/eth/eth.block.dtos';
import { EstimateGasResponse } from '../../../dtos/eth/eth.estimate.gas.dto';
import { EthNetworkInfo } from '../../../dtos/eth/eth.network.info';
import { IBaseEthFactoryDto } from '../../../interfaces/clients/eth/apis/eth.api.factory.dto.interface';

@injectable()
export class EthApiFactoryDto implements IBaseEthFactoryDto<
EthNetworkInfo,
EstimateGasResponse,
EthBlockInfo,
EthBlocksResponse
> {
	getEstimateGasResponse(data: any): EstimateGasResponse {
		return new EstimateGasResponse(data);
	}

	getNetworkInfo(data: any): EthNetworkInfo {
		return new EthNetworkInfo(data);
	}

	getBlock(data: any): EthBlockInfo {
		return new EthBlockInfo(data);
	}

	getBlocks(data: any): EthBlocksResponse {
		return new EthBlocksResponse(data);
	}
}
