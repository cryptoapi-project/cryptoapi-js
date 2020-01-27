import { IConfigurable } from '../../configs/configurable.interface';
import { IEthAddressApi } from '../eth/apis/eth.sub.apis/eth.address.api.interface';
import { IEthTokenApi } from '../eth/apis/eth.sub.apis/eth.token.api.interface';
import { IServerConfig } from '../../configs/crypto.config.interface';
import { IMainInfoApi } from './sub.api.clients/main.info.interface';
import { IEthContractApi } from '../eth/apis/eth.sub.apis/eth.contract.api.interface';
import { IEthNotifyApi } from '../eth/apis/eth.sub.apis/eth.notify.api.interface';
import { IEthRawTransactionApi } from '../eth/apis/eth.sub.apis/eth.raw.transaction.interface';
import { IEthTransactionsApi } from '../eth/apis/eth.sub.apis/eth.transactions.interface';
import { IEthBlockApi } from '../eth/apis/eth.sub.apis/eth.block.interface';


export interface IApiClient<
	NetworkInfo,
	EstimateGasRequest,
	EstimateGasResponse,
> extends
	IMainInfoApi<
		NetworkInfo,
		EstimateGasRequest,
		EstimateGasResponse
	>,
	IEthAddressApi,
	IEthTokenApi,
	IEthContractApi,
	IEthNotifyApi,
	IEthRawTransactionApi,
	IEthTransactionsApi,
	IEthBlockApi,
	IConfigurable<IServerConfig> {
}
