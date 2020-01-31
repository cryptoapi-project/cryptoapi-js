import { KlayAddressBalance } from '@src/dtos/klay/klay.address.balance';
import { KlayAddressInfo } from '@src/dtos/klay/klay.address.info';
import { EstimateGasResponse } from '@src/dtos/klay/klay.estimate.gas';
import { KlayNetworkInfo } from '@src/dtos/klay/klay.network.info';
import { KlayRawTransaction } from '@src/dtos/klay/klay.raw.transaction';
import { IBaseEthFactoryDto } from '@src/interfaces/clients/eth/apis/eth.api.factory.dto.interface';

export interface IKlayApiFactoryDto extends IBaseEthFactoryDto<
	KlayNetworkInfo, EstimateGasResponse,
	KlayAddressBalance, KlayAddressInfo,
	KlayRawTransaction
> {}
