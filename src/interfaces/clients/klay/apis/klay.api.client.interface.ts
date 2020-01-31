import { KlayAddressBalance } from '@src/dtos/klay/klay.address.balance';
import { KlayAddressInfo } from '@src/dtos/klay/klay.address.info';
import { EstimateGasResponse } from '@src/dtos/klay/klay.estimate.gas';
import { KlayNetworkInfo } from '@src/dtos/klay/klay.network.info';
import { KlayRawTransaction } from '@src/dtos/klay/klay.raw.transaction';
import { IBaseEthApiClient } from '@src/interfaces/clients/eth/apis/eth.api.client.interface';

export interface IKlayApiClient extends IBaseEthApiClient<
	KlayNetworkInfo, EstimateGasResponse,
	KlayAddressBalance, KlayAddressInfo,
	KlayRawTransaction
> {}
