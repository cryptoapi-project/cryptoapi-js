import {
	EthBlockNotification,
	EthTransactionNotification,
} from '../../../../dtos/eth/eth.notification.dtos';
import { IBaseContractEventsClient } from '../../base/base.contract.events.client.interface';

export interface IEthEventsClient extends IBaseContractEventsClient
	<EthBlockNotification, EthTransactionNotification> {}
