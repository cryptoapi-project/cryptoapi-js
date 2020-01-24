import {
	KlayBlockNotification,
	KlayTransactionNotification,
} from '../../../../dtos/klay/klay.notification.dtos';
import { IBaseContractEventsClient } from '../../base/base.contract.events.client.interface';

export interface IKlayEventsClient extends IBaseContractEventsClient
	<KlayBlockNotification, KlayTransactionNotification> {}
