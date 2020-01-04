import { IConfigurable } from '../../../configs/configurable.interface';
import { IEthAddressApi } from './eth.sub.apis/eth.address.api.interface';
import { IEthTokenApi } from './eth.sub.apis/eth.token.api.interface';
import { IServerConfig } from '../../../configs/crypto.config.interface';
import { IEthMainInfoApi } from './eth.sub.apis/eth.main.info.interface';
import { IEthContractApi } from './eth.sub.apis/eth.contract.api.interface';
import { IEthNotifyApi } from './eth.sub.apis/eth.notify.api.interface';
import { IEthRawTransactionApi } from './eth.sub.apis/eth.raw.transaction.interface';
import { IEthTransactionsApi } from './eth.sub.apis/eth.transactions.interface';
import { IEthBlockApi } from './eth.sub.apis/eth.block.interface';

export interface IEthApiClient extends
	IEthMainInfoApi,
	IEthAddressApi,
	IEthTokenApi,
	IEthContractApi,
	IEthNotifyApi,
	IEthRawTransactionApi,
	IEthTransactionsApi,
	IEthBlockApi,
	IConfigurable<IServerConfig> {
}
