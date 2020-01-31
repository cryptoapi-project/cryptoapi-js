import { EthSubscribeToken } from '@src/dtos/eth/eth.subscribe.token.dto';
import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';

export interface IEthNotifyApi extends IConfigurable<IServerConfig> {
	subscribePushNotifications(token: string, addresses: string[]): Promise<EthSubscribeToken>;
	unsubscribePushNotifications(token: string, addresses: string[]): Promise<boolean>;
}
