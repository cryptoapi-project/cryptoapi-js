import { EthAddressBalance } from '../../../../dtos/eth/eth.address.balance';
import { EthAddressInfo } from '../../../../dtos/eth/eth.address.info';
import { EstimateGasResponse } from '../../../../dtos/eth/eth.estimate.gas';
import { EthNetworkInfo } from '../../../../dtos/eth/eth.network.info';
import { EthRawTransaction } from '../../../../dtos/eth/eth.raw.transaction';
import { EthTransactionByAddresses, EthTransactionReceipt, EthTransactionsInterAddresses, EthTransactionsIntersection, FullEthTransaction } from '../../../../dtos/eth/eth.transaction.dtos';

export interface IBaseEthFactoryDto<
	TNetworkInfo, TEstimateGasResponse,
	TAddressBalance, TAddressInfo,
	TRawTransaction,
	TTransactionByAddresses, TTransactionsIntersection,
	TFullTransaction, TTransactionsInterAddresses,
	TTransactionReceipt
> {
	getNetworkInfo(data: any): TNetworkInfo;
	getEstimateGasResponse(data: any): TEstimateGasResponse;

	getAddressBalance(data: any): TAddressBalance;
	getAddressInfo(data: any): TAddressInfo;

	getRawTransaction(data: any): TRawTransaction;

	getTransactionByAddresses(data: any): TTransactionByAddresses;
	getTransactionsIntersection(data: any): TTransactionsIntersection;
	getFullTransaction(data: any): TFullTransaction;
	getTransactionsInterAddresses(data: any): TTransactionsInterAddresses;
	getTransactionReceipt(data: any): TTransactionReceipt;
}

export interface IEthFactoryDto extends IBaseEthFactoryDto<
	EthNetworkInfo, EstimateGasResponse,
	EthAddressBalance, EthAddressInfo,
	EthRawTransaction,
	EthTransactionByAddresses, EthTransactionsIntersection,
	FullEthTransaction, EthTransactionsInterAddresses,
	EthTransactionReceipt
> {}
