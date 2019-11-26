import { EthNetworkInfo } from '../../../dtos/eth.network.info';
import { IConfigurable } from '../../configs/configurable.interface';
import { IServerConfig } from '../../configs/crypto.config.interface';

export interface IEthMainInfoApi extends IConfigurable<IServerConfig> {
	getNetworkInfo(): Promise<EthNetworkInfo>;
}
