import { injectable } from 'inversify';

import { EstimateGasResponse } from '../../../dtos/eth/eth.estimate.gas.dto';
import { EthNetworkInfo } from '../../../dtos/eth/eth.network.info';
import { IBaseEthFactoryDto } from '../../../interfaces/clients/eth/apis/eth.api.factory.dto.interface';

@injectable()
export class EthApiFactoryDto implements IBaseEthFactoryDto<EthNetworkInfo, EstimateGasResponse> {
	getEstimateGasResponse(data: any): EstimateGasResponse {
		return new EstimateGasResponse(data);
	}

	getNetworkInfo(data: any): EthNetworkInfo {
		return new EthNetworkInfo(data);
	}
}
