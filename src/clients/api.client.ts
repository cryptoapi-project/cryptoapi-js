import 'reflect-metadata';
import { injectable, inject } from 'inversify';

import { TYPES_DEPENDENCIES } from '../constants/inversify.constants';

import { IApiClient } from '../interfaces/clients/api.client.interface';
import { IEthApiClient } from '../interfaces/eth.apis/eth.api.client.interface';

@injectable()
export class ApiClient implements IApiClient {
	eth: IEthApiClient;
	
	constructor(
		@inject(TYPES_DEPENDENCIES.IEthApiClient) eth: IEthApiClient
	) {
		this.eth = eth;
	}
}
