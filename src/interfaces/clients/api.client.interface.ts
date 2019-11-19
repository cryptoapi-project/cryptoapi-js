import { IEthApiClient } from '../eth.apis/eth.api.client.interface';

export interface IApiClient {
	eth: IEthApiClient;
}
