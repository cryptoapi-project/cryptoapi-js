import { inject, injectable } from 'inversify';

import { CODE } from '../../../../constants/http.constants';
import { TYPES_DI } from '../../../../constants/inversify.constants';

import { EthSubscribeToken } from '../../../../dtos/eth/eth.subscribe.token.dto';
import { BaseLibraryException } from '../../../../exceptions/library.exceptions/base.exception';

import { AbstractApi } from '../../../../abstracts/abstract.api';
import { IEthNotifyApi } from '../../../../interfaces/clients/eth/apis/eth.sub.apis/eth.notify.api.interface';
import { IValidateHelper } from '../../../../interfaces/providers/helpers/validate.helper.interface';
import { IHttpService } from '../../../../interfaces/providers/http.service.interface';

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
	 * @method subscribePushNotifications
	 * @param {string} token
	 * @param {string[]} addresses
	 * @return {Promise<EthSubscribeToken>}
	 */
	async subscribePushNotifications(token: string, addresses: string[]): Promise<EthSubscribeToken> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses)) {
			throw new BaseLibraryException(`Addresses must be an array.`);
		}

		const subscribeToken = await this.httpService.agent.post<EthSubscribeToken>(
			`${this.config!.baseUrl}/coins/eth/push-notifications/addresses/:addresses/balance`
				.replace(':addresses', addresses.join(',')),
			 { firebase_token: token },
		);

		return new EthSubscribeToken(subscribeToken.data);
	}

	/**
	 * Method to unsubscribe push notification by token.
	 * @method unsubscribePushNotifications
	 * @param {string} token
	 * @param {string[]} addresses
	 * @return {Promise<EthSubscribeToken>}
	 */
	async unsubscribePushNotifications(token: string, addresses: string[]): Promise<boolean> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses)) {
			throw new BaseLibraryException(`Addresses must be an array.`);
		}

		const unsubscribeToken = await this.httpService.agent.delete<EthSubscribeToken>(
			`${this.config!.baseUrl}/coins/eth/push-notifications/addresses/:addresses/balance?firebase_token=${token}`
				.replace(':addresses', addresses.join(',')),
		);

		return unsubscribeToken.status === CODE.OK;
	}
}
