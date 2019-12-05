import { IConfigurable } from '../../configs/configurable.interface';
import { IServerConfig } from '../../configs/crypto.config.interface';

import { EthSubscribeToken } from '../../../dtos/eth/eth.subscribe.token.dto';

export interface IEthNotifyApi extends IConfigurable<IServerConfig> {
	subscribeToken(token: string, addresses: string[]): Promise<EthSubscribeToken>;
	unsubscribeToken(token: string, addresses: string[]): Promise<boolean>;
}
