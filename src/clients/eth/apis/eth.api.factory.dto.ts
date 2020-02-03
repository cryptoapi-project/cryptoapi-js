import { injectable } from 'inversify';

import { EthAddressBalance } from '@src/dtos/eth/eth.address.balance';
import { EthAddressInfo } from '@src/dtos/eth/eth.address.info';
import { EthContract, EthContractLog } from '@src/dtos/eth/eth.contract';
import { EstimateGasResponse } from '@src/dtos/eth/eth.estimate.gas';
import { EthNetworkInfo } from '@src/dtos/eth/eth.network.info';
import { EthRawTransaction } from '@src/dtos/eth/eth.raw.transaction';
import { EthTokenInfo } from '@src/dtos/eth/eth.token.info';
import { EthTokenSearchResponse } from '@src/dtos/eth/eth.token.search';
import { EthTokenBalanceByHoldersOut } from '@src/dtos/eth/eth.tokens.by.holders';
import { EthTokenTransfersResponse } from '@src/dtos/eth/eth.transfer.dto';
import { IEthApiFactoryDto } from '@src/interfaces/clients/eth/apis/eth.api.factory.dto.interface';

@injectable()
export class EthApiFactoryDto implements IEthApiFactoryDto {
	getEstimateGasResponse(data: any): EstimateGasResponse {
		return new EstimateGasResponse(data);
	}

	getNetworkInfo(data: any): EthNetworkInfo {
		return new EthNetworkInfo(data);
	}

	getAddressBalance(data: any): EthAddressBalance {
		return new EthAddressBalance(data);
	}

	getAddressInfo(data: any): EthAddressInfo {
		return new EthAddressInfo(data);
	}

	getTokenInfoByTokenAddress(data: any): EthTokenInfo {
		return new EthTokenInfo(data);
	}

	getTokenBalanceByAddresses(data: any): EthTokenBalanceByHoldersOut {
		return new EthTokenBalanceByHoldersOut(data);
	}

	getTokenBalancesByHolders(data: any): EthTokenBalanceByHoldersOut {
		return new EthTokenBalanceByHoldersOut(data);
	}

	searchToken(data: any): EthTokenSearchResponse {
		return new EthTokenSearchResponse(data);
	}

	getTokenTransfers(data: any): EthTokenTransfersResponse {
		return new EthTokenTransfersResponse(data);
	}

	getTokenTransfersByAddresses(data: any): EthTokenTransfersResponse {
		return new EthTokenTransfersResponse(data);
	}
	getContract(data: any): EthContract {
		return new EthContract(data);
	}

	getContractLog(data: any): EthContractLog {
		return new EthContractLog(data);
	}

	getRawTransaction(data: any): EthRawTransaction {
		return new EthRawTransaction(data);
	}

}
