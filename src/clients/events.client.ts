import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../constants/inversify.constants';
import { IEthEvents } from '../interfaces/clients/eth/events/eth.events.interface';
import { IEventsClient } from '../interfaces/clients/events.client.interface';
import { IKlayEvents } from '../interfaces/clients/klay/events/klay.events.interface';
import { IUtxoEvents } from '../interfaces/clients/utxo/events/utxo.events.client.interface';
import { ICryptoConfig } from '../interfaces/configs/crypto.config.interface';

@injectable()
export class EventsClient implements IEventsClient {
	eth: IEthEvents;
	klay: IKlayEvents;
	btc: IUtxoEvents;
	bch: IUtxoEvents;
	ltc: IUtxoEvents;

	constructor(
		@inject(TYPES_DI.IEthEvents) eth: IEthEvents,
		@inject(TYPES_DI.IKlayEvents) klay: IKlayEvents,
		@inject(TYPES_DI.IUtxoEvents) btc: IUtxoEvents,
		@inject(TYPES_DI.IUtxoEvents) bch: IUtxoEvents,
		@inject(TYPES_DI.IUtxoEvents) ltc: IUtxoEvents,
	) {
		this.eth = eth;
		this.klay = klay;
		this.btc = btc;
		this.bch = bch;
		this.ltc = ltc;
	}

	@inject(TYPES_DI.ICoreLibBch)
	private _coreLibBch: any;

	@inject(TYPES_DI.ICoreLibBtc)
	private _coreLibBtc: any;

	@inject(TYPES_DI.ICoreLibLtc)
	private _coreLibLtc: any;

	/**
	 *  @method configure
	 *  @param {ICryptoConfig} config
	 */
	configure(config: ICryptoConfig): void {
		if (!config) {
			return;
		}

		this.eth.configure(config.eth, config.token);
		this.klay.configure(config.klay, config.token);
		this.btc.configure(config.btc, config.token);
		this.bch.configure(config.bch, config.token);
		this.ltc.configure(config.ltc, config.token);

		this.bch.configureCoreClient(this._coreLibBch);
		this.btc.configureCoreClient(this._coreLibBtc);
		this.ltc.configureCoreClient(this._coreLibLtc);
	}
}
