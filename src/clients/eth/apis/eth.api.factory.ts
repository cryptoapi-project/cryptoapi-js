import { EstimateGasResponse } from '../../../dtos/eth/eth.estimate.gas.dto';
import { EthNetworkInfo } from '../../../dtos/eth/eth.network.info';

import { IEthApiFactory } from '../../../interfaces/clients/eth/apis/eth.api.factory.dto.interface';

export class EthApiFactory implements IEthApiFactory {

	getNetworkInfo(data: any): EthNetworkInfo {
		return new EthNetworkInfo(data);
	}

	getEstimateGasResponse(data: any): EstimateGasResponse {
		return new EstimateGasResponse(data);
	}

}
