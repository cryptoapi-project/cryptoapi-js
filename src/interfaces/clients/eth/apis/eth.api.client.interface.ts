import { EthAddressBalance } from '@src/dtos/eth/eth.address.balance';
import { EthAddressInfo } from '@src/dtos/eth/eth.address.info';
import { EthContract, EthContractLog } from '@src/dtos/eth/eth.contract';
import { EstimateGasResponse } from '@src/dtos/eth/eth.estimate.gas';
import { EthNetworkInfo } from '@src/dtos/eth/eth.network.info';
import { EthRawTransaction } from '@src/dtos/eth/eth.raw.transaction';
import {
	EthExternalTransactions,
	EthFullTransaction,
	EthFullTransactionReceipt,
	EthTransactionsBetweenAddresses,
	EthTransfers,
} from '@src/dtos/eth/eth.transaction';
import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';

import { IEthAddressApi } from './eth.sub.apis/eth.address.api.interface';
import { IEthBlockApi } from './eth.sub.apis/eth.block.interface';
import { IEthContractApi } from './eth.sub.apis/eth.contract.api.interface';
import { IEthMainInfoApi } from './eth.sub.apis/eth.main.info.interface';
import { IEthNotifyApi } from './eth.sub.apis/eth.notify.api.interface';
import { IEthRawTransactionApi } from './eth.sub.apis/eth.raw.transaction.interface';
import { IEthTokenApi } from './eth.sub.apis/eth.token.api.interface';
import { IEthTransactionsApi } from './eth.sub.apis/eth.transactions.interface';

export interface IBaseEthApiClient<
	TNetworkInfo, TEstimateGasResponse,
	TAddressBalance, TAddressInfo,
	TContract, TContractLog,
	TRawTransaction,
	TTransfers, TExternalTransactions,
	TFullTransaction, TTransactionsBetweenAddresses,
	TTransactionReceipt
> extends
	IEthMainInfoApi<TNetworkInfo, TEstimateGasResponse>,
	IEthAddressApi<TAddressBalance, TAddressInfo>,
	IEthTokenApi,
	IEthContractApi<TContract, TContractLog>,
	IEthNotifyApi,
	IEthRawTransactionApi<TRawTransaction>,
	IEthTransactionsApi<
		TTransfers, TExternalTransactions,
		TFullTransaction, TTransactionsBetweenAddresses,
		TTransactionReceipt
	>,
	IEthBlockApi,
	IConfigurable<IServerConfig> {
}

export interface IEthApiClient extends IBaseEthApiClient<
	EthNetworkInfo, EstimateGasResponse,
	EthAddressBalance, EthAddressInfo,
	EthContract, EthContractLog,
	EthRawTransaction,
	EthTransfers, EthExternalTransactions,
	EthFullTransaction, EthTransactionsBetweenAddresses,
	EthFullTransactionReceipt
> {}
