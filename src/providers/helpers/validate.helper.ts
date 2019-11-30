import { injectable } from 'inversify';

@injectable()
export class ValidateHelper  {

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
