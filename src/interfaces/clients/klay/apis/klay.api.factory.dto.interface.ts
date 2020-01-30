import { KlayAddressBalance } from '../../../../dtos/klay/klay.address.balance';
import { KlayAddressInfo } from '../../../../dtos/klay/klay.address.info';
import { EstimateGasResponse } from '../../../../dtos/klay/klay.estimate.gas';
import { KlayNetworkInfo } from '../../../../dtos/klay/klay.network.info';
import { KlayRawTransaction } from '../../../../dtos/klay/klay.raw.transaction';
import { IBaseEthFactoryDto } from '../../eth/apis/eth.api.factory.dto.interface';

export interface IKlayApiFactoryDto extends IBaseEthFactoryDto<
	KlayNetworkInfo, EstimateGasResponse,
	KlayAddressBalance, KlayAddressInfo,
	KlayRawTransaction
> {}
