import { injectable } from 'inversify';
import { isHex, isAddress } from 'web3-utils';

import { MAX_CONFIRMATION } from '../../constants/events.constants';
import { InvalidParamsException } from '../../exceptions/library.exceptions/invalid.params.exceptions';

import { ISubsHelper } from '../../interfaces/providers/helpers/subs.helper.interface';

@injectable()
export class SubsHelper implements ISubsHelper {

	/**
	 * @method validateConfirmations
	 * @param {number} confirmations
	 * @return {void}
	 */
	validateConfirmations(confirmations: number) {
		if (!Number.isInteger(confirmations)) {
			throw new InvalidParamsException('Confirmations must be integer');
		}

		if (confirmations < 0) {
			throw new InvalidParamsException('Confirmations mustn\'t be negative');
		}

		if (confirmations > MAX_CONFIRMATION) {
			throw new InvalidParamsException(`Confirmations max value is ${MAX_CONFIRMATION}`);
		}
	}

	/**
	 * @method validateAddress
	 * @param {string} address
	 * @param {string} key?
	 * @return {void}
	 */
	validateAddress(address: string, key: string = 'address') {
		if (!address) {
			throw new InvalidParamsException(`Param ${key} is required`);
		}

		if (!isAddress(address)) {
			throw new InvalidParamsException(`Invalid ${key}`);
		}
	}

	/**
	 * @method validateHash
	 * @param {string} hash
	 * @return {void}
	 */
	validateHash(hash: string) {
		if (!hash) {
			throw new InvalidParamsException(`Param hash is required`);
		}

		if (!isHex(hash)) {
			throw new InvalidParamsException(`Invalid hash`);
		}

	}

}
