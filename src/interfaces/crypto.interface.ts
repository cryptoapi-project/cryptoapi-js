import { IApiClient } from './clients/api.client.interface';
import { IEventsClient } from './clients/events.client.interface';
import { ICryptoConfig } from './configs/crypto.config.interface';

export interface ICrypto {
	setConfig(options: ICryptoConfig): void;
	events: IEventsClient | null;
	api: IApiClient | null;
}
