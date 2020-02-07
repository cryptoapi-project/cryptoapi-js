import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { TYPES_DI } from '@src/constants/inversify.constants';
import { IKlayApiClient } from '@src/interfaces/clients/klay/apis/klay.api.client.interface';
import { IKlayTestnetApiClient } from '@src/interfaces/clients/klay/apis/klay.testnet.api.client.interface';
import { IKlayServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { IHttpService } from '@src/interfaces/providers/http.service.interface';

@injectable()
export class KlayTestnetApiClient implements IKlayTestnetApiClient {
	baobab: IKlayApiClient;

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IKlayApiClient) baobab: IKlayApiClient,
	) {
		this.baobab = baobab;
	}

	/**
	 * @method configure
	 * @param {IKlayServerConfig} config
	 * @return {void}
	 */
	configure(config: IKlayServerConfig) {
		this.baobab.configure({ ...config, baseUrl: config.testnet.api.baobab });
	}
}
