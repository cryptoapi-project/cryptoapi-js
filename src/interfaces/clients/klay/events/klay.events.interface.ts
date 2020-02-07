import { IKlayEventsClient } from './klay.events.client.interface';
import { IKlayTestnetEventsClient } from './klay.testnet.events.client.interface';

export interface IKlayEvents extends IKlayEventsClient {
	testnet: IKlayTestnetEventsClient;
}
