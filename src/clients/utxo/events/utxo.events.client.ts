import { inject, injectable } from 'inversify';
import WS from 'isomorphic-ws';

import { BaseEventsClient } from '@src/clients/base.event.clients/base.events.client';
import { SUBSCRIPTIONS } from '@src/constants/events.constants';
import { TYPES_DI } from '@src/constants/inversify.constants';
import {
	BalanceNotification,
	TransactionConfirmationNotification,
} from '@src/dtos/base/event.notification.dtos';
import { ServerConfig } from '@src/dtos/crypto.config';
import {
	UtxoBlockNotification,
	UtxoTransactionNotification,
} from '@src/dtos/utxo/utxo.notification.dtos';
import { InvalidParamsException } from '@src/exceptions/library.exceptions/invalid.params.exceptions';
import { IUtxoEventsClient } from '@src/interfaces/clients/utxo/events/utxo.events.client.interface';
import { IUtxoServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { IIdHelper } from '@src/interfaces/providers/helpers/id.helper.interface';
import { ISubsHelper } from '@src/interfaces/providers/helpers/subs.helper.interface';

@injectable()
export class UtxoEventsClient extends
	BaseEventsClient <UtxoBlockNotification, UtxoTransactionNotification>
	implements IUtxoEventsClient {

	private coreLib: any;

	constructor(
		@inject(TYPES_DI.IIdHelper) idHelper: IIdHelper,
		@inject(TYPES_DI.ISubsHelper) subsHelper: ISubsHelper,
	) {
		super(idHelper, subsHelper);
	}

	/**
	 *
	 * @method coreClient
	 * param {any} coreClient
	 */
	configureCoreClient(coreClient: any) {
		this.coreLib = coreClient;
	}

	/**
	 *  @method onMessage
	 *  @param {WS.MessageEvent} event
	 */
	protected onMessage(event: WS.MessageEvent) {
		const info = this._handleEventOnMessage(event);
		if (!info) {
			return;
		}
		switch (info.method) {
			case SUBSCRIPTIONS.BLOCK:
				info.sub!.cb(new UtxoBlockNotification(info.notification));
				break;
			case SUBSCRIPTIONS.TRANSACTION:
				info.sub!.cb(new UtxoTransactionNotification(info.notification));
				break;
			case SUBSCRIPTIONS.CONFIRMATION:
				info.sub!.cb(new TransactionConfirmationNotification(info.notification));
				break;
			case SUBSCRIPTIONS.BALANCE:
				info.sub!.cb(new BalanceNotification(info.notification));
				break;
		}
	}

	/**
	 * @private validateAddress
	 * @param {string} address
	 * @param {string} key
	 */
	public validateAddress(address: string, key: string = 'address') {
		this.subsHelper.validateAddress(address);
		if (!this.coreLib.Address.isValid(address, this.config!.network)) {
			throw new InvalidParamsException(`Invalid ${key}`);
		}
	}
}

@injectable()
export class UtxoEvents extends UtxoEventsClient {

	testnet: IUtxoEventsClient;

	constructor(
		@inject(TYPES_DI.IIdHelper) idHelper: IIdHelper,
		@inject(TYPES_DI.ISubsHelper) subsHelper: ISubsHelper,
		@inject(TYPES_DI.IUtxoEventsClient) testnet: IUtxoEventsClient,
	) {
		super(idHelper, subsHelper);

		this.testnet = testnet;
	}

	/**
	 *  @method configure
	 *  @param {IUtxoServerConfig} config
	 *  @param {string} token
	 */
	configure(config: IUtxoServerConfig, token: string) {
		super.configure(new ServerConfig(config), token);

		this.testnet.configure(config, token);
	}

}
