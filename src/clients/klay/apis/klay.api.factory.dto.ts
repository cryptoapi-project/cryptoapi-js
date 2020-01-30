import { injectable } from 'inversify';

import { KlayAddressBalance } from '../../../dtos/klay/klay.address.balance';
import { KlayAddressInfo } from '../../../dtos/klay/klay.address.info';

import { EstimateGasResponse } from '../../../dtos/klay/klay.estimate.gas.dto';
import { KlayNetworkInfo } from '../../../dtos/klay/klay.network.info';
import { IBaseEthFactoryDto } from '../../../interfaces/clients/eth/apis/eth.api.factory.dto.interface';

@injectable()
export class KlayApiFactoryDto implements IBaseEthFactoryDto<
	KlayNetworkInfo, EstimateGasResponse,
	KlayAddressBalance, KlayAddressInfo
> {
	getEstimateGasResponse(data: any): EstimateGasResponse {
		return new EstimateGasResponse(data);
	}

	getNetworkInfo(data: any): KlayNetworkInfo {
		return new KlayNetworkInfo(data);
	}

	getAddressBalance(data: any): KlayAddressBalance {
		return new KlayAddressBalance(data);
	}

	getAddressInfo(data: any): KlayAddressInfo {
		return new KlayAddressInfo(data);
	}

}
