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

export interface IBaseEthFactoryDto<
	TNetworkInfo, TEstimateGasResponse,
	TAddressBalance, TAddressInfo,
	TTokenInfo, TTokenBalanceByHoldersOut, TTokenSearchResponse, TTokenTransfersResponse,
	TBlockInfo, TBlocksResponse,
	TContract, TContractLog,
	TRawTransaction,
	TTransfers, TExternalTransactions,
	TFullTransaction, TTransactionsBetweenAddresses,
	TTransactionReceipt
	> {
	getNetworkInfo(data: any): TNetworkInfo;
	getEstimateGasResponse(data: any): TEstimateGasResponse;

	getAddressBalance(data: any): TAddressBalance;
	getAddressInfo(data: any): TAddressInfo;

	getToken(data: any): TTokenInfo;
	getTokenBalanceByAddresses(data: any): TTokenBalanceByHoldersOut;
	getTokenBalancesByHolders(data: any): TTokenBalanceByHoldersOut;
	searchToken(data: any): TTokenSearchResponse;
	getTokenTransfers(data: any): TTokenTransfersResponse;
	getTokenTransfersByAddresses(data: any): TTokenTransfersResponse;
	getBlock(data: any): TBlockInfo;
	getBlocksResponse(data: any): TBlocksResponse;

	getContract(data: any): TContract;
	getContractLog(data: any): TContractLog;

	getRawTransaction(data: any): TRawTransaction;

	getTransfers(data: any): TTransfers;
	getExternalTransactions(data: any): TExternalTransactions;
	getTransactionsBetweenAddresses(data: any): TTransactionsBetweenAddresses;
	getFullTransaction(data: any): TFullTransaction;
	getTransactionReceipt(data: any): TTransactionReceipt;
}

export interface IEthApiFactoryDto extends IBaseEthFactoryDto<
	EthNetworkInfo, EstimateGasResponse,
	EthAddressBalance, EthAddressInfo,
	EthTokenInfo, EthTokenBalanceByHoldersOut, EthTokenSearchResponse, EthTokenTransfersResponse,
	EthBlockInfo, EthBlocksResponse,
	EthContract, EthContractLog,
	EthRawTransaction,
	EthTransfers, EthExternalTransactions,
	EthFullTransaction, EthTransactionsBetweenAddresses,
	EthFullTransactionReceipt
	> { }
