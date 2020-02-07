import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IKlayServerConfig } from '@src/interfaces/configs/crypto.config.interface';

import { IKlayEventsClient } from './klay.events.client.interface';

export interface IKlayTestnetEventsClient extends IConfigurable<IKlayServerConfig> {
	baobab: IKlayEventsClient;
}
