import { IKlayApiClient } from './klay.api.client.interface';
import { IKlayTestnetApiClient } from './klay.testnet.api.client.interface';

export interface IKlayApi extends IKlayApiClient {
	testnet: IKlayTestnetApiClient;
}
