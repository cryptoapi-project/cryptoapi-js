import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IEthServerConfig } from '@src/interfaces/configs/crypto.config.interface';

import { IEthEventsClient } from './eth.events.client.interface';

export interface IEthTestnetEventsClient extends IConfigurable<IEthServerConfig> {
	rinkeby: IEthEventsClient;
}
