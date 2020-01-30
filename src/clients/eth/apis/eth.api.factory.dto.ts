import { injectable } from 'inversify';

import { EthAddressBalance } from '../../../dtos/eth/eth.address.balance';
import { EthAddressInfo } from '../../../dtos/eth/eth.address.info';

import { EstimateGasResponse } from '../../../dtos/eth/eth.estimate.gas';
import { EthNetworkInfo } from '../../../dtos/eth/eth.network.info';
import { EthRawTransaction } from '../../../dtos/eth/eth.raw.transaction';
import { IBaseEthFactoryDto } from '../../../interfaces/clients/eth/apis/eth.api.factory.dto.interface';

@injectable()
export class EthApiFactoryDto implements IBaseEthFactoryDto<
	EthNetworkInfo, EstimateGasResponse,
	EthAddressBalance, EthAddressInfo,
	EthRawTransaction
> {
	getEstimateGasResponse(data: any): EstimateGasResponse {
		return new EstimateGasResponse(data);
	}

	getNetworkInfo(data: any): EthNetworkInfo {
		return new EthNetworkInfo(data);
	}

	getAddressBalance(data: any): EthAddressBalance {
		return new EthAddressBalance(data);
	}

	getAddressInfo(data: any): EthAddressInfo {
		return new EthAddressInfo(data);
	}

	getRawTransaction(data: any): EthRawTransaction {
		return new EthRawTransaction(data);
	}
}
