import { inject, injectable } from 'inversify';
import 'reflect-metadata';

import { TYPES_DI } from '../constants/inversify.constants';
import { IApiClient } from '../interfaces/clients/api.client.interface';
import { IEthApiClient } from '../interfaces/clients/eth/apis/eth.api.client.interface';
import { IKlayApiClient } from '../interfaces/clients/klay/apis/klay.api.client.interface';
import { IUtxoApiClient } from '../interfaces/clients/utxo/apis/utxo.api.client.interface';
import { ICryptoConfig } from '../interfaces/configs/crypto.config.interface';
import { IHttpService } from '../interfaces/providers/http.service.interface';

@injectable()
export class ApiClient implements IApiClient {
	eth: IEthApiClient;
	klay: IKlayApiClient;
	btc: IUtxoApiClient;
	bch: IUtxoApiClient;

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IEthApiClient) eth: IEthApiClient,
		@inject(TYPES_DI.IKlayApiClient) klay: IKlayApiClient,
		@inject(TYPES_DI.IUtxoApiClient) btc: IUtxoApiClient,
		@inject(TYPES_DI.IUtxoApiClient) bch: IUtxoApiClient,
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
