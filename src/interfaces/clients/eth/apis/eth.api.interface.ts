import { IEthApiClient } from './eth.api.client.interface';
import { IEthTestnetApiClient } from './eth.testnet.api.client.interface';

export interface IEthApi extends IEthApiClient {
	testnet: IEthTestnetApiClient;
}
