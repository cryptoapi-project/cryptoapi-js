import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';

import { EthSubscribeToken } from '../../../dtos/eth/eth.subscribe.token.dto';
import { BaseLibraryException } from '../../../exceptions/library.exceptions/base.exception';

import { IEthNotifyApi } from '../../../interfaces/eth.apis/eth.sub.apis/eth.notify.api.interface';
import { IHttpService } from '../../../interfaces/providers/http.service.interface';
import { IValidateHelper } from '../../../interfaces/providers/helpers/validate.helper.interface';
import { AbstractApi } from '../../../abstracts/abstract.api';

@injectable()
export class EthNotifyApi extends AbstractApi  implements IEthNotifyApi {
	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IValidateHelper) private readonly validateHelper: IValidateHelper,
	) {
		super();
	}

	/**
	 * Method to subscribe token.
	 * @method subscribeToken
	 * @param {string} token
	 * @param {string[]} addresses
	 * @return {Promise<EthSubscribeToken>}
	 */
	async subscribeToken(token: string, addresses: string[]): Promise<EthSubscribeToken> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses)) {
			throw new BaseLibraryException(`Addresses must be an array.`);
		}

		const subscribeToken = await this.httpService.agent.post<EthSubscribeToken>(
			`${this.config!.baseUrl}/coins/eth/accounts/:addresses/subscribe`
				.replace(':addresses', addresses.join(',')),
			 { token },
		);

		return new EthSubscribeToken(subscribeToken.data);
	}
}
