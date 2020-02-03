import { injectable } from 'inversify';

import { KlayAddressBalance } from '@src/dtos/klay/klay.address.balance';
import { KlayAddressInfo } from '@src/dtos/klay/klay.address.info';
import { KlayContract, KlayContractLog } from '@src/dtos/klay/klay.contract';
import { EstimateGasResponse } from '@src/dtos/klay/klay.estimate.gas';
import { KlayNetworkInfo } from '@src/dtos/klay/klay.network.info';
import { KlayRawTransaction } from '@src/dtos/klay/klay.raw.transaction';
import { KlayTokenInfo } from '@src/dtos/klay/klay.token.info';
import { KlayTokenSearchResponse } from '@src/dtos/klay/klay.token.search';
import { KlayTokenBalanceByHoldersOut } from '@src/dtos/klay/klay.tokens.by.holders';
import { KlayTokenTransfersResponse } from '@src/dtos/klay/klay.transfer.dto';
import { IKlayApiFactoryDto } from '@src/interfaces/clients/klay/apis/klay.api.factory.dto.interface';

@injectable()
export class KlayApiFactoryDto implements IKlayApiFactoryDto {

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

	getTokenInfoByTokenAddress(data: any): KlayTokenInfo {
		return new KlayTokenInfo(data);
	}

	getTokenBalanceByAddresses(data: any): KlayTokenBalanceByHoldersOut {
		return new KlayTokenBalanceByHoldersOut(data);
	}

	getTokenBalancesByHolders(data: any): KlayTokenBalanceByHoldersOut {
		return new KlayTokenBalanceByHoldersOut(data);
	}

	searchToken(data: any): KlayTokenSearchResponse {
		return new KlayTokenSearchResponse(data);
	}

	getTokenTransfers(data: any): KlayTokenTransfersResponse {
		return new KlayTokenTransfersResponse(data);
	}

	getTokenTransfersByAddresses(data: any): KlayTokenTransfersResponse {
		return new KlayTokenTransfersResponse(data);
	}
	getContract(data: any): KlayContract {
		return new KlayContract(data);
	}

	getContractLog(data: any): KlayContractLog {
		return new KlayContractLog(data);
	}

	getRawTransaction(data: any): KlayRawTransaction {
		return new KlayRawTransaction(data);
	}

}
