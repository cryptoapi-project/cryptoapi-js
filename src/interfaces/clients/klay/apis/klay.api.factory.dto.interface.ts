import { KlayAddressBalance } from '@src/dtos/klay/klay.address.balance';
import { KlayAddressInfo } from '@src/dtos/klay/klay.address.info';
import { EstimateGasResponse } from '@src/dtos/klay/klay.estimate.gas.dto';
import { KlayNetworkInfo } from '@src/dtos/klay/klay.network.info';
import { KlayTokenInfo } from '@src/dtos/klay/klay.token.info';
import { KlayTokenSearchResponse } from '@src/dtos/klay/klay.token.search';
import { KlayTokenBalanceByHoldersOut } from '@src/dtos/klay/klay.tokens.by.holders';
import { KlayTokenTransfersResponse } from '@src/dtos/klay/klay.transfer.dto';
import { IBaseEthFactoryDto } from '@src/interfaces/clients/eth/apis/eth.api.factory.dto.interface';

export interface IKlayApiFactoryDto extends IBaseEthFactoryDto<
	KlayNetworkInfo, EstimateGasResponse,
	KlayAddressBalance, KlayAddressInfo,
	KlayTokenInfo, KlayTokenBalanceByHoldersOut, KlayTokenSearchResponse, KlayTokenTransfersResponse
	> { }
