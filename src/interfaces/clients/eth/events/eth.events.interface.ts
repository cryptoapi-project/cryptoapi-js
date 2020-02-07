import { IEthEventsClient } from './eth.events.client.interface';
import { IEthTestnetEventsClient } from './eth.testnet.events.client.interface';

export interface IEthEvents extends IEthEventsClient {
	testnet: IEthTestnetEventsClient;
}
