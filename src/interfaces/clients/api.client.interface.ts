import { IEthApiClient } from '../eth.apis/eth.api.client.interface';
import { IConfigurable } from '../configs/configurable.interface';
import { ICryptoConfig } from '../configs/crypto.config.interface';

export interface IApiClient extends IConfigurable<ICryptoConfig> {
	eth: IEthApiClient;
}
