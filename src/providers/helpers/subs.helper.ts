import { injectable } from 'inversify';
import { isHex } from 'web3-utils';

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
	}

	/**
	 * @method validateHash
	 * @param {string} hash
	 * @return {void}
	 */
	validateHash(hash: string) {
		if (!hash) {
			throw new InvalidParamsException('Param hash is required');
		}

		if (!isHex(hash)) {
			throw new InvalidParamsException('Invalid hash');
		}

	}

	/**
	 * @method validateCallback
	 * @param {Function} cb
	 */
	validateCallback(cb: (notification: any) => void) {
		if (!(cb instanceof Function)) {
			throw new InvalidParamsException('Callback must be a function');
		}
	}

	/**
	 * @method validateBlockNumber
	 * @param {number} block
	 * @param {number} max - optional
	 * @return {void}
	 */
	validateBlockNumber(block: number, max?: number) {
		if (!Number.isInteger(block)) {
			throw new InvalidParamsException('Block number must be integer');
		}

		if (block < 0) {
			throw new InvalidParamsException('Block number mustn\'t be negative');
		}

		if (max && block > max) {
			throw new InvalidParamsException(`Block number max value is ${max}`);
		}
	}

	/**
	 * @method validateHex
	 * @param {string} str
	 * @return {void}
	 */
	validateHex(str: string) {
		if (!isHex(str)) {
			throw new InvalidParamsException('Invalid hex string');
		}
	}

}
