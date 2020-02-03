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

export interface IBaseEthFactoryDto<
	TNetworkInfo, TEstimateGasResponse,
	TAddressBalance, TAddressInfo,
	TTokenInfo, TTokenBalanceByHoldersOut, TTokenSearchResponse, TTokenTransfersResponse,
	TContract, TContractLog,
	TRawTransaction
	> {
	getNetworkInfo(data: any): TNetworkInfo;
	getEstimateGasResponse(data: any): TEstimateGasResponse;

	getAddressBalance(data: any): TAddressBalance;
	getAddressInfo(data: any): TAddressInfo;

	getTokenInfoByTokenAddress(data: any): TTokenInfo;
	getTokenBalanceByAddresses(data: any): TTokenBalanceByHoldersOut;
	getTokenBalancesByHolders(data: any): TTokenBalanceByHoldersOut;
	searchToken(data: any): TTokenSearchResponse;
	getTokenTransfers(data: any): TTokenTransfersResponse;
	getTokenTransfersByAddresses(data: any): TTokenTransfersResponse;
	getContract(data: any): TContract;
	getContractLog(data: any): TContractLog;

	getRawTransaction(data: any): TRawTransaction;
}

export interface IEthApiFactoryDto extends IBaseEthFactoryDto<
	EthNetworkInfo, EstimateGasResponse,
	EthAddressBalance, EthAddressInfo,
	EthTokenInfo, EthTokenBalanceByHoldersOut, EthTokenSearchResponse, EthTokenTransfersResponse,
	EthContract, EthContractLog,
	EthRawTransaction
	> { }
