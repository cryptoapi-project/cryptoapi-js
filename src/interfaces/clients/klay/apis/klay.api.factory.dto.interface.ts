import { KlayBlockInfo, KlayBlocksResponse } from '../../../../dtos/klay/klay.block.dtos';
import { EstimateGasResponse } from '../../../../dtos/klay/klay.estimate.gas.dto';
import { KlayNetworkInfo } from '../../../../dtos/klay/klay.network.info';
import { IBaseEthFactoryDto } from '../../eth/apis/eth.api.factory.dto.interface';

export interface IKlayApiFactoryDto extends IBaseEthFactoryDto<
  KlayNetworkInfo,
  EstimateGasResponse,
  KlayBlockInfo,
  KlayBlocksResponse
  > { }
