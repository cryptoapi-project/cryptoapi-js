import { inject, injectable } from 'inversify';
import WS from 'isomorphic-ws';
import 'reflect-metadata';
import { isAddress } from 'web3-utils';

import { BaseContractEventsClient } from '@src/clients/base.event.clients/base.contract.events.client';
import { SUBSCRIPTIONS } from '@src/constants/events.constants';
import { TYPES_DI } from '@src/constants/inversify.constants';
import {
	BalanceNotification,
	ContractLogNotification,
	TokenBalanceNotification,
	TransactionConfirmationNotification,
	TransferNotification,
} from '@src/dtos/base/event.notification.dtos';
import { ServerConfig } from '@src/dtos/crypto.config';
import {
	EthBlockNotification,
	EthTransactionNotification,
} from '@src/dtos/eth/eth.notification.dtos';
import { InvalidParamsException } from '@src/exceptions/library.exceptions/invalid.params.exceptions';
import { IEthEventsClient } from '@src/interfaces/clients/eth/events/eth.events.client.interface';
import { IEthTestnetEventsClient } from '@src/interfaces/clients/eth/events/eth.testnet.events.client.interface';
import { IEthServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { IIdHelper } from '@src/interfaces/providers/helpers/id.helper.interface';
import { ISubsHelper } from '@src/interfaces/providers/helpers/subs.helper.interface';

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

@injectable()
export class EthEvents extends EthEventsClient {

	testnet: IEthTestnetEventsClient;

	constructor(
		@inject(TYPES_DI.IIdHelper) idHelper: IIdHelper,
		@inject(TYPES_DI.ISubsHelper) subsHelper: ISubsHelper,
		@inject(TYPES_DI.IEthTestnetEventsClient) testnet: IEthTestnetEventsClient,
	) {
		super(idHelper, subsHelper);

		this.testnet = testnet;
	}

	/**
	 *  @method configure
	 *  @param {IEthServerConfig} config
	 *  @param {string} token
	 */
	configure(config: IEthServerConfig, token: string) {
		super.configure(new ServerConfig(config), token);

		this.testnet.configure(config, token);
	}

}
