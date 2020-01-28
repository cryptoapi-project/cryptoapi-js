import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../constants/inversify.constants';

import { IEthEventsClient } from '../interfaces/clients/eth/events/eth.events.client.interface';
import { IEventsClient } from '../interfaces/clients/events.client.interface';
import { IKlayEventsClient } from '../interfaces/clients/klay/events/klay.events.client.interface';
import { IUtxoEventsClient } from '../interfaces/clients/utxo/events/utxo.events.client.interface';

import { ICryptoConfig } from '../interfaces/configs/crypto.config.interface';

@injectable()
export class EventsClient implements IEventsClient {
	eth: IEthEventsClient;
	klay: IKlayEventsClient;
	btc: IUtxoEventsClient;
	bch: IUtxoEventsClient;

	constructor(
		@inject(TYPES_DI.IEthEventsClient) eth: IEthEventsClient,
		@inject(TYPES_DI.IKlayEventsClient) klay: IKlayEventsClient,
		@inject(TYPES_DI.IUtxoEventsClient) btc: IUtxoEventsClient,
		@inject(TYPES_DI.IUtxoEventsClient) bch: IUtxoEventsClient,
	) {
		this.eth = eth;
		this.klay = klay;
		this.btc = btc;
		this.bch = bch;
	}

	@inject(TYPES_DI.ICoreLibBch)
	private _coreLibBch: any;

	@inject(TYPES_DI.ICoreLibBtc)
	private _coreLibBtc: any;

	/**
	 *  @method configure
	 *  @param {ICryptoConfig} config
	 */
	configure(config: ICryptoConfig): void {
		if (!config) {
			return;
		}

		this.eth.configure(config.eth.events, config.token);
		this.klay.configure(config.klay.events, config.token);
		this.btc.configure(config.btc.events, config.token);
		this.bch.configure(config.bch.events, config.token);
		this.bch.configureCoreClient(this._coreLibBch);
		this.btc.configureCoreClient(this._coreLibBtc);
	}
}
