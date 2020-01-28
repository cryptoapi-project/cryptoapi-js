import { EstimateGasResponse } from '../../../../dtos/klay/klay.estimate.gas.dto';
import { KlayNetworkInfo } from '../../../../dtos/klay/klay.network.info';
import { IBaseEthApiClient } from '../../eth/apis/eth.api.client.interface';

export interface IKlayApiClient extends IBaseEthApiClient<KlayNetworkInfo, EstimateGasResponse> {}
