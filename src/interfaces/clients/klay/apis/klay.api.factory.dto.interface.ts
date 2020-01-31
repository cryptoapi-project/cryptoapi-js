import { KlayAddressBalance } from '@src/dtos/klay/klay.address.balance';
import { KlayAddressInfo } from '@src/dtos/klay/klay.address.info';
import { KlayContract, KlayContractLog } from '@src/dtos/klay/klay.contract.dto';
import { EstimateGasResponse } from '@src/dtos/klay/klay.estimate.gas.dto';
import { KlayNetworkInfo } from '@src/dtos/klay/klay.network.info';
import { IBaseEthFactoryDto } from '@src/interfaces/clients/eth/apis/eth.api.factory.dto.interface';

export interface IKlayApiFactoryDto extends IBaseEthFactoryDto<
	KlayNetworkInfo, EstimateGasResponse,
	KlayAddressBalance, KlayAddressInfo,
	KlayContract, KlayContractLog
> {}
