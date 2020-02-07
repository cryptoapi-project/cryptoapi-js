import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { TYPES_DI } from '@src/constants/inversify.constants';
import { IEthApiClient } from '@src/interfaces/clients/eth/apis/eth.api.client.interface';
import { IEthTestnetApiClient } from '@src/interfaces/clients/eth/apis/eth.testnet.api.client.interface';
import { IEthServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { IHttpService } from '@src/interfaces/providers/http.service.interface';

@injectable()
export class EthTestnetApiClient implements IEthTestnetApiClient {
	rinkeby: IEthApiClient;

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IEthApiClient) rinkeby: IEthApiClient,
	) {
		this.rinkeby = rinkeby;
	}

	/**
	 * @method configure
	 * @param {ICryptoConfig} config
	 * @return {void}
	 */
	configure(config: IEthServerConfig) {
		this.rinkeby.configure({ ...config, baseUrl: config.testnet.api.rinkeby });
	}
}
