import { IEventsConfig } from './events.config.interface';

export interface ICryptoOptions {
	test?: number;
}

export interface ICryptoConfig extends ICryptoOptions {
	token: string;
	events?: IEventsConfig;
}
