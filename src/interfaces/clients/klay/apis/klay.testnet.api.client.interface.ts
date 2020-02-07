import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IKlayServerConfig } from '@src/interfaces/configs/crypto.config.interface';

import { IKlayApiClient } from './klay.api.client.interface';

export interface IKlayTestnetApiClient extends IConfigurable<IKlayServerConfig> {
	baobab: IKlayApiClient;
}
