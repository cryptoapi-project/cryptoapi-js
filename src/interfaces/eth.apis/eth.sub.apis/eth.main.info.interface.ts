import { EthNetworkInfo } from '../../../dtos/eth.network.info';
import { IServerConfig } from '../../configs/crypto.config.interface';

export interface IEthMainInfoApi {
	config: IServerConfig;
	getNetworkInfo(): Promise<EthNetworkInfo>;
}
