import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { isAddress } from 'web3-utils';
import WS from 'isomorphic-ws';

import { SUBSCRIPTIONS } from '../../../constants/events.constants';
import { TYPES_DI } from '../../../constants/inversify.constants';

import {
	EthTokenTransferSubscription,
	EthContractLogSubscription,
} from '../../../dtos/eth/eth.subscription.dtos';
import {
	EthTransferNotification,
	EthBlockNotification,
	EthTransactionNotification,
	EthContractLogNotification,
} from '../../../dtos/eth/eth.notification.dtos';

import { IEthEventsClient } from '../../../interfaces/clients/eth/events/eth.events.client.interface';
import { IIdHelper } from '../../../interfaces/providers/helpers/id.helper.interface';
import { ISubsHelper } from '../../../interfaces/providers/helpers/subs.helper.interface';
import { BaseEventsClient } from '../../base/base.events.client';

import { InvalidParamsException } from '../../../exceptions/library.exceptions/invalid.params.exceptions';
import { TransactionConfirmationNotification } from '../../../dtos/base/event.notification.dtos';

@injectable()
export class EthEventsClient extends
	BaseEventsClient<EthBlockNotification, EthTransactionNotification>
	implements IEthEventsClient {

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
				info.sub!.cb(new EthBlockNotification(info.notification));
				break;
			case SUBSCRIPTIONS.TRANSACTION:
				info.sub!.cb(new EthTransactionNotification(info.notification));
				break;
			case SUBSCRIPTIONS.TRANSFER:
				info.sub!.cb(new EthTransferNotification(info.notification));
				break;
			case SUBSCRIPTIONS.CONTRACT_LOG:
				info.sub!.cb(new EthContractLogNotification(info.notification));
				break;
			case SUBSCRIPTIONS.CONFIRMATION:
				info.sub!.cb(new TransactionConfirmationNotification(info.notification));
				break;
		}
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
	 *  @method onTokenTransfers
	 *  @param {EthTokenTransferSubscription} info
	 *  @param {Function} cb
	 */
	onTokenTransfers(
		info: EthTokenTransferSubscription = { confirmations: 0, address: '', token: '' },
		cb: (notification: EthTransferNotification) => void,
	) {
		const { token, address, confirmations } = info;
		this.validateAddress(address);
		this.validateAddress(token, 'token');
		this.subsHelper.validateAddress(token, 'token');
		this.subsHelper.validateCallback(cb);

		if (confirmations) {
			this.subsHelper.validateConfirmations(confirmations);
		}

		const id = this.idHelper.get();
		const params = [SUBSCRIPTIONS.TRANSFER, token, address, confirmations];

		return super.setSubscription(id, params, cb);
	}

	/**
	 *  @method onContractLog
	 *  @param {EthContractLogSubscription} info
	 *  @param {Function} cb
	 */
	onContractLog(
		info: EthContractLogSubscription,
		cb: (notification: EthContractLogNotification) => void,
	) {
		const { address, confirmations, from, to, topics } = info;

		this.validateAddress(address);
		this.subsHelper.validateCallback(cb);

		if (confirmations) {
			this.subsHelper.validateConfirmations(confirmations);
		}

		if (from) {
			this.subsHelper.validateBlockNumber(from);
		}

		if (to) {
			this.subsHelper.validateBlockNumber(to);
		}

		if (topics) {
			topics.forEach((t) => this.subsHelper.validateHex(t));
		}

		const id = this.idHelper.get();
		const params = [SUBSCRIPTIONS.CONTRACT_LOG, address, confirmations, from, to, topics];

		return super.setSubscription(id, params, cb);

	}

}
