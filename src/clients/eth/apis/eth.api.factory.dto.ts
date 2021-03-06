import { injectable } from 'inversify';

import { EthAddressBalance } from '@src/dtos/eth/eth.address.balance';
import { EthAddressInfo } from '@src/dtos/eth/eth.address.info';
import { EthBlockInfo, EthBlocksResponse } from '@src/dtos/eth/eth.block.dtos';
import { EthContract, EthContractLog } from '@src/dtos/eth/eth.contract';
import { EstimateGasResponse } from '@src/dtos/eth/eth.estimate.gas';
import { EthNetworkInfo } from '@src/dtos/eth/eth.network.info';
import { EthRawTransaction } from '@src/dtos/eth/eth.raw.transaction';
import { EthTokenInfo } from '@src/dtos/eth/eth.token.info';
import { EthTokenSearchResponse } from '@src/dtos/eth/eth.token.search';
import { EthTokenBalanceByHoldersOut } from '@src/dtos/eth/eth.tokens.by.holders';
import {
	EthExternalTransactions,
	EthFullTransaction,
	EthFullTransactionReceipt,
	EthTransactionsBetweenAddresses,
	EthTransfers,
} from '@src/dtos/eth/eth.transaction';
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

	getTokenInfo(data: any): EthTokenInfo {
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

	getBlock(data: any): EthBlockInfo {
		return new EthBlockInfo(data);
	}

	getBlocksResponse(data: any): EthBlocksResponse {
		return new EthBlocksResponse(data);
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

	getTransfers(data: any): EthTransfers {
		return new EthTransfers(data);
	}

	getTransactions(data: any): EthTransactionsBetweenAddresses {
		return new EthTransactionsBetweenAddresses(data);
	}

	getExternalTransactions(data: any): EthExternalTransactions {
		return new EthExternalTransactions(data);
	}

	getFullTransaction(data: any): EthFullTransaction {
		return new EthFullTransaction(data);
	}

	getTransactionReceipt(data: any): EthFullTransactionReceipt {
		return new EthFullTransactionReceipt(data);
	}
}
