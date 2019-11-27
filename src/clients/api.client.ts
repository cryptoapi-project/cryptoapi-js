import 'reflect-metadata';
import { injectable, inject } from 'inversify';

import { TYPES_DI } from '../constants/inversify.constants';

import { IApiClient } from '../interfaces/clients/api.client.interface';
import { IEthApiClient } from '../interfaces/eth.apis/eth.api.client.interface';
import { IHttpService } from '../interfaces/providers/http.service.interface';
import { ICryptoConfig } from '../interfaces/configs/crypto.config.interface';

@injectable()
export class ApiClient implements IApiClient {
	eth: IEthApiClient;

	constructor(
		@inject(TYPES_DI.IHttpService)
		private readonly httpService: IHttpService,
		@inject(TYPES_DI.IEthApiClient) eth: IEthApiClient,
	) {
		this.eth = eth;
	}

	/**
	 * Configure httpClient, ethApiClient.
	 * @method configure
	 * @param {ICryptoConfig} config
	 * @return {void}
	 */
	configure(config: ICryptoConfig) {
		this.httpService.configure(config.token, config.timeout);
		this.eth.configure(config.eth);
	}
}
