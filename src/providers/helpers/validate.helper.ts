import { injectable } from 'inversify';

import { IValidateHelper } from '../../interfaces/providers/helpers/validate.helper.interface';

@injectable()
export class ValidateHelper implements IValidateHelper {

	/**
	 * Method to check array
	 * @method isArray
	 * @param {any[]} data
	 * @return {boolean}
	 */
	isArray(data: any[]) {
		return Array.isArray(data);
	}
}
