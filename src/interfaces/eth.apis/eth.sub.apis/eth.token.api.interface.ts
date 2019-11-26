import { EthTokenInfo } from '../../../dtos/eth.token.info';
import { IConfigurable } from '../../configs/configurable.interface';
import { IServerConfig } from '../../configs/crypto.config.interface';

export interface IEthTokenApi  extends IConfigurable<IServerConfig> {
	getTokenInfoByTokenAddress(address: string): Promise<EthTokenInfo>;
}
