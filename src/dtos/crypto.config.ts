import { injectable } from 'inversify';
import {
	ICryptoConfig,
	ICryptoOptions,
} from '../interfaces/configs/crypto.config.interface';
import { IEventsConfig } from '../interfaces/configs/events.config.interface';

@injectable()
export class CryptoConfig implements ICryptoConfig {
	token: string;
	events?: IEventsConfig;
	options?: ICryptoOptions;

	constructor({ token = '', events }: { token?: string, events?: IEventsConfig }) {
		this.token = token;
		this.events = events;
	}
}
