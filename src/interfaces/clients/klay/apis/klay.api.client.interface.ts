import { KlayAddressBalance } from '@src/dtos/klay/klay.address.balance';
import { KlayAddressInfo } from '@src/dtos/klay/klay.address.info';
import { KlayBlockInfo, KlayBlocksResponse } from '@src/dtos/klay/klay.block.dtos';
import { EstimateGasResponse } from '@src/dtos/klay/klay.estimate.gas.dto';
import { KlayNetworkInfo } from '@src/dtos/klay/klay.network.info';
import { IBaseEthApiClient } from '@src/interfaces/clients/eth/apis/eth.api.client.interface';

export interface IKlayApiClient extends IBaseEthApiClient<
	KlayNetworkInfo, EstimateGasResponse,
	KlayAddressBalance, KlayAddressInfo,
	KlayBlockInfo, KlayBlocksResponse
	> { }
