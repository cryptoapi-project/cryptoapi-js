import { EthAddressBalance } from '@src/dtos/eth/eth.address.balance';
import { EthAddressInfo } from '@src/dtos/eth/eth.address.info';
import { EthContract, EthContractLog } from '@src/dtos/eth/eth.contract';
import { EstimateGasResponse } from '@src/dtos/eth/eth.estimate.gas';
import { EthNetworkInfo } from '@src/dtos/eth/eth.network.info';
import { EthRawTransaction } from '@src/dtos/eth/eth.raw.transaction';
import {
	EthExternalTransactions,
	EthFullTransaction,
	EthTransactionReceipt,
	EthTransactionsBetweenAddresses,
	EthTransfers,
} from '@src/dtos/eth/eth.transaction';

export interface IBaseEthFactoryDto<
	TNetworkInfo, TEstimateGasResponse,
	TAddressBalance, TAddressInfo,
	TContract, TContractLog,
	TRawTransaction,
	TTransferHistory, TExternalTransactions,
	TFullTransaction, TTransactionsBetweenAddresses,
	TTransactionReceipt
> {
	getNetworkInfo(data: any): TNetworkInfo;
	getEstimateGasResponse(data: any): TEstimateGasResponse;

	getAddressBalance(data: any): TAddressBalance;
	getAddressInfo(data: any): TAddressInfo;

	getContract(data: any): TContract;
	getContractLog(data: any): TContractLog;

	getRawTransaction(data: any): TRawTransaction;

	getTransfers(data: any): TTransferHistory;
	getExternalTransactions(data: any): TExternalTransactions;
	getTransactionsBetweenAddresses(data: any): TTransactionsBetweenAddresses;
	getFullTransaction(data: any): TFullTransaction;
	getTransactionReceipt(data: any): TTransactionReceipt;
}

export interface IEthApiFactoryDto extends IBaseEthFactoryDto<
	EthNetworkInfo, EstimateGasResponse,
	EthAddressBalance, EthAddressInfo,
	EthContract, EthContractLog,
	EthRawTransaction,
	EthTransfers, EthExternalTransactions,
	EthFullTransaction, EthTransactionsBetweenAddresses,
	EthTransactionReceipt
> {}
