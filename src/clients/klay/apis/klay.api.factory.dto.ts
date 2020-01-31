import { injectable } from 'inversify';

import { KlayBlockInfo, KlayBlocksResponse } from '../../../dtos/klay/klay.block.dtos';
import { EstimateGasResponse } from '../../../dtos/klay/klay.estimate.gas.dto';
import { KlayNetworkInfo } from '../../../dtos/klay/klay.network.info';
import { IBaseEthFactoryDto } from '../../../interfaces/clients/eth/apis/eth.api.factory.dto.interface';

@injectable()
export class KlayApiFactoryDto implements IBaseEthFactoryDto<
KlayNetworkInfo,
EstimateGasResponse,
KlayBlockInfo,
KlayBlocksResponse
> {
	getEstimateGasResponse(data: any): EstimateGasResponse {
		return new EstimateGasResponse(data);
	}

	getNetworkInfo(data: any): KlayNetworkInfo {
		return new KlayNetworkInfo(data);
	}

	getBlock(data: any): KlayBlockInfo {
		return new KlayBlockInfo(data);
	}

	getBlocks(data: any): KlayBlocksResponse {
		return new KlayBlocksResponse(data);
	}
}
