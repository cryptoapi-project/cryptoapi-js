import 'reflect-metadata';
import { inject, injectable } from 'inversify';
import { isAddress } from 'web3-utils';
import WS from 'isomorphic-ws';

import { SUBSCRIPTIONS } from '../../../constants/events.constants';
import { TYPES_DI } from '../../../constants/inversify.constants';

import {
	EthTokenSubscription,
	EthContractLogSubscription,
} from '../../../dtos/eth/eth.subscription.dtos';
import {
	EthTransferNotification,
	EthBlockNotification,
	EthTransactionNotification,
	EthContractLogNotification,
	EthTokenBalanceNotification,
} from '../../../dtos/eth/eth.notification.dtos';

import { IEthEventsClient } from '../../../interfaces/clients/eth/events/eth.events.client.interface';
import { IIdHelper } from '../../../interfaces/providers/helpers/id.helper.interface';
import { ISubsHelper } from '../../../interfaces/providers/helpers/subs.helper.interface';
import { BaseEventsClient } from '../../base.events.clients/base.events.client';

import { InvalidParamsException } from '../../../exceptions/library.exceptions/invalid.params.exceptions';
import {
	BalanceNotification,
	TransactionConfirmationNotification,
} from '../../../dtos/base/event.notification.dtos';

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
				info.sub!.cb(new EthTransferNotification(info.notification));
				break;
			case SUBSCRIPTIONS.CONTRACT_LOG:
				info.sub!.cb(new EthContractLogNotification(info.notification));
				break;
			case SUBSCRIPTIONS.CONFIRMATION:
				info.sub!.cb(new TransactionConfirmationNotification(info.notification));
				break;
			case SUBSCRIPTIONS.BALANCE:
				info.sub!.cb(new BalanceNotification(info.notification));
				break;
			case SUBSCRIPTIONS.TOKEN_BALANCE:
				info.sub!.cb(new EthTokenBalanceNotification(info.notification));
		}
	}

	/**
	 *  @method _setAddressSubscription
	 *  @param {SUBSCRIPTIONS} type
	 *  @param {EthTokenSubscription} info
	 *  @param {Function} cb
	 */
	private _setTokenSubscription(type: SUBSCRIPTIONS, info: EthTokenSubscription, cb: (param: any) => void) {
		const { token, address, confirmations } = info;
		this.validateAddress(info.address);
		this.validateAddress(info.token, 'token');
		this.subsHelper.validateCallback(cb);

		if (info.confirmations) {
			this.subsHelper.validateConfirmations(confirmations);
		}
		const id = this.idHelper.get();
		const params = [type, token, address, confirmations];
		return super.setSubscription(id, params, cb);
	}

	/**
	 *  @method onTokenTransfers
	 *  @param {EthTokenSubscription} info
	 *  @param {Function} cb
	 */
	onTokenTransfers(
		info: EthTokenSubscription = { confirmations: 0, address: '', token: '' },
		cb: (notification: EthTransferNotification) => void,
	) {
		return this._setTokenSubscription(SUBSCRIPTIONS.TRANSFER, info, cb);
	}

	/**
	 * @method onTokenBalance
	 *  @param {EthTokenSubscription} info
	 *  @param {Function} cb
	 */
	onTokenBalance(
		info: EthTokenSubscription = { confirmations: 0, address: '', token: '' },
		cb: (notification: EthTokenBalanceNotification) => void,
	) {
		return this._setTokenSubscription(SUBSCRIPTIONS.TOKEN_BALANCE, info, cb);
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
