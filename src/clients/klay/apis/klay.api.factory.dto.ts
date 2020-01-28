import { injectable } from 'inversify';

import { EstimateGasResponse } from '../../../dtos/klay/klay.estimate.gas.dto';
import { KlayNetworkInfo } from '../../../dtos/klay/klay.network.info';
import { IBaseEthFactoryDto } from '../../../interfaces/clients/eth/apis/eth.api.factory.dto.interface';

@injectable()
export class KlayApiFactoryDto implements IBaseEthFactoryDto<KlayNetworkInfo, EstimateGasResponse> {
	getEstimateGasResponse(data: any): EstimateGasResponse {
		return new EstimateGasResponse(data);
	}

	getNetworkInfo(data: any): KlayNetworkInfo {
		return new KlayNetworkInfo(data);
	}
}
