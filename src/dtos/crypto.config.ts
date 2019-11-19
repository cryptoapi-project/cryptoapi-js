import { injectable } from 'inversify';
import {
	ICryptoConfig,
	ICryptoOptions,
} from '../interfaces/configs/crypto.config.interface';

@injectable()
export class CryptoConfig implements ICryptoConfig {
	token: string;
	options?: ICryptoOptions;

	constructor({ token = '' }) {
		this.token = token;
	}
}
