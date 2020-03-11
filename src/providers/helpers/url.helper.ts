import { injectable } from 'inversify';

import { IUrlHelper } from '../../interfaces/providers/helpers/url.helper.interface';

@injectable()
export class UrlHelper implements IUrlHelper {

	/**
	 * Add params to url
	 * @method addOptionsToUrl
	 * @param {string} url
	 * @param {{[name: string]: any}} options?
	 * @return {string}
	 */
	addOptionsToUrl(url: string, options?: { [p: string]: any }): string {
		if (!options) { return  url; }
		let transformUrl = `${url}?`;
		Object.entries(options).forEach(([key, value]) => {
			if (value === undefined) {
				return;
			}
			transformUrl = `${transformUrl}&${key}=${value}`;
		});
		return transformUrl;
	}
}
