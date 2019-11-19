import { IEthEventsClient } from '../eth.events/eth.events.client.interface';

export interface IEventsClient {
	eth: IEthEventsClient;
}
