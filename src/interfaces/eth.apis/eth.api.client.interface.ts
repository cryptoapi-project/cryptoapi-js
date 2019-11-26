import { IConfigurable } from '../configs/configurable.interface';
import { IEthTokenApi } from './eth.sub.apis/eth.token.api.interface';
import { IServerConfig } from '../configs/crypto.config.interface';
import { IEthMainInfoApi } from './eth.sub.apis/eth.main.info.interface';

export interface IEthApiClient extends
	IEthMainInfoApi,
	IEthTokenApi,
	IConfigurable<IServerConfig> {
}
