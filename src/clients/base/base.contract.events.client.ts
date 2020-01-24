import 'reflect-metadata';
import { inject, injectable } from 'inversify';

import { SUBSCRIPTIONS } from '../../constants/events.constants';
import { TYPES_DI } from '../../constants/inversify.constants';

import {
	TransferNotification,
	ContractLogNotification,
	TokenBalanceNotification,
} from '../../dtos/base/event.notification.dtos';

import {
	TokenSubscription,
	ContractLogSubscription,
} from '../../dtos/base/event.subscription.dtos';

import { IBaseContractEventsClient } from '../../interfaces/clients/base/base.contract.events.client.interface';
import { IIdHelper } from '../../interfaces/providers/helpers/id.helper.interface';
import { ISubsHelper } from '../../interfaces/providers/helpers/subs.helper.interface';
import { BaseEventsClient } from './base.events.client';

@injectable()
export abstract class BaseContractEventsClient<
	BlockNotification,
	TransactionNotification,
> extends BaseEventsClient<BlockNotification, TransactionNotification> implements IBaseContractEventsClient<
	BlockNotification,
	TransactionNotification
> {

	constructor(
		@inject(TYPES_DI.IIdHelper) idHelper: IIdHelper,
		@inject(TYPES_DI.ISubsHelper) subsHelper: ISubsHelper,
	) {
		super(idHelper, subsHelper);
	}

	/**
	 *  @method _setAddressSubscription
	 *  @param {SUBSCRIPTIONS} type
	 *  @param {TokenSubscription} info
	 *  @param {Function} cb
	 */
	private _setTokenSubscription(type: SUBSCRIPTIONS, info: TokenSubscription, cb: (param: any) => void) {
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
	 *  @param {TokenSubscription} info
	 *  @param {Function} cb
	 */
	onTokenTransfers(
		info: TokenSubscription = { confirmations: 0, address: '', token: '' },
		cb: (notification: TransferNotification) => void,
	) {
		return this._setTokenSubscription(SUBSCRIPTIONS.TRANSFER, info, cb);
	}

	/**
	 * @method onTokenBalance
	 *  @param {TokenSubscription} info
	 *  @param {Function} cb
	 */
	onTokenBalance(
		info: TokenSubscription = { confirmations: 0, address: '', token: '' },
		cb: (notification: TokenBalanceNotification) => void,
	) {
		return this._setTokenSubscription(SUBSCRIPTIONS.TOKEN_BALANCE, info, cb);
	}

	/**
	 *  @method onContractLog
	 *  @param {ContractLogSubscription} info
	 *  @param {Function} cb
	 */
	onContractLog(
		info: ContractLogSubscription,
		cb: (notification: ContractLogNotification) => void,
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
