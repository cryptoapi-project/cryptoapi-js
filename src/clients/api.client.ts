import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { TYPES_DI } from '../constants/inversify.constants';
import { IApiClient } from '../interfaces/clients/api.client.interface';
import { IEthApi } from '../interfaces/clients/eth/apis/eth.api.interface';
import { IKlayApi } from '../interfaces/clients/klay/apis/klay.api.interface';
import { IUtxoApi } from '../interfaces/clients/utxo/apis/utxo.api.client.interface';
import { ICryptoConfig } from '../interfaces/configs/crypto.config.interface';
import { IHttpService } from '../interfaces/providers/http.service.interface';

@injectable()
export class ApiClient implements IApiClient {
	eth: IEthApi;
	klay: IKlayApi;
	btc: IUtxoApi;
	bch: IUtxoApi;

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IEthApi) eth: IEthApi,
		@inject(TYPES_DI.IKlayApi) klay: IKlayApi,
		@inject(TYPES_DI.IUtxoApi) btc: IUtxoApi,
		@inject(TYPES_DI.IUtxoApi) bch: IUtxoApi,
	) {
		this.eth = eth;
		this.klay = klay;
		this.btc = btc;
		this.bch = bch;
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
		this.klay.configure(config.klay);
		this.btc.configure(config.btc);
		this.bch.configure(config.bch);
	}
}
