import { IApiClient } from './clients/api.client.interface';
import { IEventsClient } from './clients/events.client.interface';
import { IConfigurable } from './configs/configurable.interface';
import { ICryptoConfig } from './configs/crypto.config.interface';

export interface ICrypto extends IConfigurable<ICryptoConfig> {
	events: IEventsClient | null;
	api: IApiClient | null;
}

export interface IPublicCrypto {
	events: IEventsClient | null;
	api: IApiClient | null;
}
