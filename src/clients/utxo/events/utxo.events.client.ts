import { inject, injectable } from 'inversify';
import WS from 'isomorphic-ws';

import { SUBSCRIPTIONS } from '../../../constants/events.constants';
import {
	UtxoBlockNotification,
	UtxoTransactionNotification,
} from '../../../dtos/utxo/utxo.notification.dtos';

import { TYPES_DI } from '../../../constants/inversify.constants';
import { IUtxoEventsClient } from '../../../interfaces/clients/utxo/events/utxo.events.client.interface';
import { IIdHelper } from '../../../interfaces/providers/helpers/id.helper.interface';
import { ISubsHelper } from '../../../interfaces/providers/helpers/subs.helper.interface';
import { BaseEventsClient } from '../../base.event.clients/base.events.client';

import {
	BalanceNotification,
	TransactionConfirmationNotification,
} from '../../../dtos/base/event.notification.dtos';
import { InvalidParamsException } from '../../../exceptions/library.exceptions/invalid.params.exceptions';

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
