import { inject, injectable } from 'inversify';

import { CODE } from '../../../../constants/http.constants';
import { TYPES_DI } from '../../../../constants/inversify.constants';

import { EthSubscribeToken } from '../../../../dtos/eth/eth.subscribe.token.dto';
import { BaseLibraryException } from '../../../../exceptions/library.exceptions/base.exception';

import { IEthNotifyApi } from '../../../../interfaces/clients/eth/apis/eth.sub.apis/eth.notify.api.interface';
import { IHttpService } from '../../../../interfaces/providers/http.service.interface';
import { IValidateHelper } from '../../../../interfaces/providers/helpers/validate.helper.interface';
import { AbstractApi } from '../../../../abstracts/abstract.api';

@injectable()
export class EthNotifyApi extends AbstractApi  implements IEthNotifyApi {
	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IValidateHelper) private readonly validateHelper: IValidateHelper,
	) {
		super();
	}

	/**
	 * Method to subscribe push notification by token.
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

	/**
	 * Method to unsubscribe push notification by token.
	 * @method unsubscribeToken
	 * @param {string} token
	 * @param {string[]} addresses
	 * @return {Promise<EthSubscribeToken>}
	 */
	async unsubscribeToken(token: string, addresses: string[]): Promise<boolean> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses)) {
			throw new BaseLibraryException(`Addresses must be an array.`);
		}

		const unsubscribeToken = await this.httpService.agent.post<EthSubscribeToken>(
			`${this.config!.baseUrl}/coins/eth/accounts/:addresses/unsubscribe`
				.replace(':addresses', addresses.join(',')),
			{ token },
		);

		return unsubscribeToken.status === CODE.OK;
	}
}
