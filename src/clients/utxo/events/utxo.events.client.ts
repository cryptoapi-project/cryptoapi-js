import { inject, injectable } from 'inversify';
import { Address } from 'bitcore-lib';
import WS from 'isomorphic-ws';

import {
	UtxoBlockNotification,
	UtxoTransactionNotification,
} from '../../../dtos/utxo/utxo.notification.dtos';
import { SUBSCRIPTIONS } from '../../../constants/events.constants';

import { BaseEventsClient } from '../../base/base.events.client';
import { TYPES_DI } from '../../../constants/inversify.constants';
import { IIdHelper } from '../../../interfaces/providers/helpers/id.helper.interface';
import { ISubsHelper } from '../../../interfaces/providers/helpers/subs.helper.interface';
import { IUtxoEventsClient } from '../../../interfaces/clients/utxo/events/utxo.events.client.interface';

import { InvalidParamsException } from '../../../exceptions/library.exceptions/invalid.params.exceptions';
import { TransactionConfirmationNotification } from '../../../dtos/base/event.notification.dtos';

@injectable()
export class UtxoEventsClient extends
	BaseEventsClient <UtxoBlockNotification, UtxoTransactionNotification>
	implements IUtxoEventsClient {

	constructor(
		@inject(TYPES_DI.IIdHelper) idHelper: IIdHelper,
		@inject(TYPES_DI.ISubsHelper) subsHelper: ISubsHelper,
	) {
		super(idHelper, subsHelper);
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
		}
	}

	/**
	 * @private validateAddress
	 * @param {string} address
	 * @param {string} key
	 */
	public validateAddress(address: string, key: string = 'address') {
		this.subsHelper.validateAddress(address);
		// @ts-ignore
		if (!Address.isValid(address, this.config.network)) {
			throw new InvalidParamsException(`Invalid ${key}`);
		}
	}
}
