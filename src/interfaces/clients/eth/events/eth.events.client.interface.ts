import {
	EthBlockNotification,
	EthTransactionNotification,
} from '@src/dtos/eth/eth.notification.dtos';

import { IBaseContractEventsClient } from '../../base.events.client/base.contract.events.client.interface';

export interface IEthEventsClient extends IBaseContractEventsClient
	<EthBlockNotification, EthTransactionNotification> {}
