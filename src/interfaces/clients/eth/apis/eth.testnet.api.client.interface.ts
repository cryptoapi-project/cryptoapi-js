import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IEthServerConfig } from '@src/interfaces/configs/crypto.config.interface';

import { IEthApiClient } from './eth.api.client.interface';

export interface IEthTestnetApiClient extends IConfigurable<IEthServerConfig> {
	rinkeby: IEthApiClient;
}
