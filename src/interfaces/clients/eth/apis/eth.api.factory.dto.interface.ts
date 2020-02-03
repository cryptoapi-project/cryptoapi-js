import { EthAddressBalance } from '@src/dtos/eth/eth.address.balance';
import { EthAddressInfo } from '@src/dtos/eth/eth.address.info';
import { EthContract, EthContractLog } from '@src/dtos/eth/eth.contract';
import { EstimateGasResponse } from '@src/dtos/eth/eth.estimate.gas';
import { EthNetworkInfo } from '@src/dtos/eth/eth.network.info';
import { EthRawTransaction } from '@src/dtos/eth/eth.raw.transaction';
import { EthTransactionByAddresses, EthTransactionReceipt, EthTransactionsInterAddresses, EthTransactionsIntersection, FullEthTransaction } from '@src/dtos/eth/eth.transaction';

export interface IBaseEthFactoryDto<
	TNetworkInfo, TEstimateGasResponse,
	TAddressBalance, TAddressInfo,
	TContract, TContractLog,
	TRawTransaction,
	TTransactionByAddresses, TTransactionsIntersection,
	TFullTransaction, TTransactionsInterAddresses,
	TTransactionReceipt
> {
	getNetworkInfo(data: any): TNetworkInfo;
	getEstimateGasResponse(data: any): TEstimateGasResponse;

	getAddressBalance(data: any): TAddressBalance;
	getAddressInfo(data: any): TAddressInfo;

	getContract(data: any): TContract;
	getContractLog(data: any): TContractLog;

	getRawTransaction(data: any): TRawTransaction;

	getTransactionByAddresses(data: any): TTransactionByAddresses;
	getTransactionsIntersection(data: any): TTransactionsIntersection;
	getFullTransaction(data: any): TFullTransaction;
	getTransactionsInterAddresses(data: any): TTransactionsInterAddresses;
	getTransactionReceipt(data: any): TTransactionReceipt;
}

export interface IEthApiFactoryDto extends IBaseEthFactoryDto<
	EthNetworkInfo, EstimateGasResponse,
	EthAddressBalance, EthAddressInfo,
	EthContract, EthContractLog,
	EthRawTransaction,
	EthTransactionByAddresses, EthTransactionsIntersection,
	FullEthTransaction, EthTransactionsInterAddresses,
	EthTransactionReceipt
> {}
