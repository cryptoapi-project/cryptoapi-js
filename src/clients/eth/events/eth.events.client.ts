import { inject, injectable } from 'inversify';
import WS from 'isomorphic-ws';
import 'reflect-metadata';
import { isAddress } from 'web3-utils';

import { SUBSCRIPTIONS } from '../../../constants/events.constants';
import { TYPES_DI } from '../../../constants/inversify.constants';

import {
	EthBlockNotification,
	EthTransactionNotification,
} from '../../../dtos/eth/eth.notification.dtos';

import { IEthEventsClient } from '../../../interfaces/clients/eth/events/eth.events.client.interface';
import { IIdHelper } from '../../../interfaces/providers/helpers/id.helper.interface';
import { ISubsHelper } from '../../../interfaces/providers/helpers/subs.helper.interface';

import { BaseContractEventsClient } from '../../base.event.clients/base.contract.events.client';

import {
	BalanceNotification,
	ContractLogNotification,
	TokenBalanceNotification,
	TransactionConfirmationNotification,
	TransferNotification,
} from '../../../dtos/base/event.notification.dtos';
import { InvalidParamsException } from '../../../exceptions/library.exceptions/invalid.params.exceptions';

@injectable()
export class EthEventsClient extends BaseContractEventsClient<EthBlockNotification, EthTransactionNotification> implements IEthEventsClient {

	constructor(
		@inject(TYPES_DI.IIdHelper) idHelper: IIdHelper,
		@inject(TYPES_DI.ISubsHelper) subsHelper: ISubsHelper,
	) {
		super(idHelper, subsHelper);
	}

	/**
	 * @private protected
	 * @param {string} address
	 * @param {string} key
	 */
	protected validateAddress(address: string, key: string = 'address') {
		this.subsHelper.validateAddress(address);
		if (!isAddress(address)) {
			throw new InvalidParamsException(`Invalid ${key}`);
		}
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
				info.sub!.cb(new EthBlockNotification(info.notification));
				break;
			case SUBSCRIPTIONS.TRANSACTION:
				info.sub!.cb(new EthTransactionNotification(info.notification));
				break;
			case SUBSCRIPTIONS.TRANSFER:
				info.sub!.cb(new TransferNotification(info.notification));
				break;
			case SUBSCRIPTIONS.CONTRACT_LOG:
				info.sub!.cb(new ContractLogNotification(info.notification));
				break;
			case SUBSCRIPTIONS.CONFIRMATION:
				info.sub!.cb(new TransactionConfirmationNotification(info.notification));
				break;
			case SUBSCRIPTIONS.BALANCE:
				info.sub!.cb(new BalanceNotification(info.notification));
				break;
			case SUBSCRIPTIONS.TOKEN_BALANCE:
				info.sub!.cb(new TokenBalanceNotification(info.notification));
		}
	}

}
