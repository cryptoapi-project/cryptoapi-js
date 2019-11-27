import { injectable } from 'inversify';
import { isHex, isAddress } from 'web3-utils';

import { MAX_CONFIRMATION } from '../constants/events.constants';
import { ISubsHelper } from '../interfaces/helpers/subs.helper.interface';

@injectable()
export class SubsHelper implements ISubsHelper {

	validateConfirmations(confirmations: number) {
		if (!Number.isInteger(confirmations)) {
			throw new Error('Confirmations must be integer');
		}

		if (confirmations < 0) {
			throw new Error('Confirmations mustn\'t be negative');
		}

		if (confirmations > MAX_CONFIRMATION) {
			throw new Error(`Confirmations max value is ${MAX_CONFIRMATION}`);
		}
	}

	validateAddress(address: string, key: string = 'address') {
		if (!address) {
			throw new Error(`Param ${key} is required`);
		}

		if (!isAddress(address)) {
			throw new Error(`Invalid ${key}`);
		}
	}

	validateHash(hash: string) {
		if (!hash) {
			throw new Error(`Param hash is required`);
		}

		if (!isHex(hash)) {
			throw new Error(`Invalid hash`);
		}

	}

}
