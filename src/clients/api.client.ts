import 'reflect-metadata';
import { injectable, inject } from 'inversify';
import axios from 'axios';

import { TYPES_DEPENDENCIES } from '../constants/inversify.constants';

import { IApiClient } from '../interfaces/clients/api.client.interface';
import { IEthApiClient } from '../interfaces/eth.apis/eth.api.client.interface';
import { ICryptoConfig } from "../interfaces/configs/crypto.config.interface";
import { IConfigurableConfig } from '../interfaces/configs/configurable.config.interface';
import {IApiConfig} from '../interfaces/configs/api.config.interface';

@injectable()
export class ApiClient implements IApiClient, IConfigurableConfig<IApiConfig> {
	eth: IEthApiClient;

	constructor(
		@inject(TYPES_DEPENDENCIES.IEthApiClient) eth: IEthApiClient
	) {
		this.eth = eth;
	}

	setConfig(config: IApiConfig): void {
		axios.defaults.params = {
			token: config.token,
		};
	}

}
