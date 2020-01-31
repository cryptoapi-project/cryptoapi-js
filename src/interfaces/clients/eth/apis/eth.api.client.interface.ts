import { IConfigurable } from '../../../configs/configurable.interface';
import { IServerConfig } from '../../../configs/crypto.config.interface';
import { IEthAddressApi } from './eth.sub.apis/eth.address.api.interface';
import { IEthBlockApi } from './eth.sub.apis/eth.block.interface';
import { IEthContractApi } from './eth.sub.apis/eth.contract.api.interface';
import { IEthMainInfoApi } from './eth.sub.apis/eth.main.info.interface';
import { IEthNotifyApi } from './eth.sub.apis/eth.notify.api.interface';
import { IEthRawTransactionApi } from './eth.sub.apis/eth.raw.transaction.interface';
import { IEthTokenApi } from './eth.sub.apis/eth.token.api.interface';
import { IEthTransactionsApi } from './eth.sub.apis/eth.transactions.interface';

import { EthBlockInfo, EthBlocksResponse } from '../../../../dtos/eth/eth.block.dtos';
import { EstimateGasResponse } from '../../../../dtos/eth/eth.estimate.gas.dto';
import { EthNetworkInfo } from '../../../../dtos/eth/eth.network.info';

export interface IBaseEthApiClient<
	TNetworkInfo,
	TEstimateGasResponse,
	TBlockInfo,
	TBlocksResponse
	> extends
	IEthMainInfoApi<TNetworkInfo, TEstimateGasResponse>,
	IEthAddressApi,
	IEthTokenApi,
	IEthContractApi,
	IEthNotifyApi,
	IEthRawTransactionApi,
	IEthTransactionsApi,
	IEthBlockApi<TBlockInfo, TBlocksResponse>,
	IConfigurable<IServerConfig> {
}

export interface IEthApiClient extends IBaseEthApiClient<
	EthNetworkInfo,
	EstimateGasResponse,
	EthBlockInfo,
	EthBlocksResponse
	> { }
