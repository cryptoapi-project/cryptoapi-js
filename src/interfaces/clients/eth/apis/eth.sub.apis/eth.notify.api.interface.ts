import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';

import { EthSubscribeToken } from '../../../../../dtos/eth/eth.subscribe.token.dto';

export interface IEthNotifyApi extends IConfigurable<IServerConfig> {
	subscribePushNotifications(token: string, addresses: string[]): Promise<EthSubscribeToken>;
	unsubscribePushNotifications(token: string, addresses: string[]): Promise<boolean>;
}
