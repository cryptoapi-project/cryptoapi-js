import {
	KlayBlockNotification,
	KlayTransactionNotification,
} from '@src/dtos/klay/klay.notification.dtos';

import { IBaseContractEventsClient } from '../../base.events.client/base.contract.events.client.interface';

export interface IKlayEventsClient extends IBaseContractEventsClient
	<KlayBlockNotification, KlayTransactionNotification> {}
