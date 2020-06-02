import { inject, injectable } from 'inversify';

import { AbstractApi } from '@src/abstracts/abstract.api';
import { CODE } from '@src/constants/http.constants';
import { TYPES_DI } from '@src/constants/inversify.constants';
import { EthSubscribeToken } from '@src/dtos/eth/eth.subscribe.token.dto';
import { BaseLibraryException } from '@src/exceptions/library.exceptions/base.exception';
import { IEthNotifyApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.notify.api.interface';
import { IValidateHelper } from '@src/interfaces/providers/helpers/validate.helper.interface';
import { IHttpService } from '@src/interfaces/providers/http.service.interface';

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
	 * @param {string[]} types
	 * @return {Promise<EthSubscribeToken>}
	 */
	async subscribePushNotifications(token: string, addresses: string[], types: string[]): Promise<EthSubscribeToken> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses)) {
			throw new BaseLibraryException(`Addresses must be an array.`);
		}

		if (!this.validateHelper.isArray(types)) {
			throw new BaseLibraryException(`Types must be an array.`);
		}

		const subscribeToken = await this.httpService.agent.post<EthSubscribeToken>(
			`${this.config!.baseUrl}/coins/eth/push-notifications/addresses/:addresses`
				.replace(':addresses', addresses.join(',')),
			 { firebase_token: token, types: types.join(',') },
		);

		return new EthSubscribeToken(subscribeToken.data);
	}

	/**
	 * Method to unsubscribe push notification by token.
	 * @method unsubscribePushNotifications
	 * @param {string} token
	 * @param {string[]} addresses
	 * @param {string[]} types
	 * @return {Promise<EthSubscribeToken>}
	 */
	async unsubscribePushNotifications(token: string, addresses: string[], types: string[]): Promise<boolean> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses)) {
			throw new BaseLibraryException(`Addresses must be an array.`);
		}

		if (!this.validateHelper.isArray(types)) {
			throw new BaseLibraryException(`Types must be an array.`);
		}

		const unsubscribeToken = await this.httpService.agent.delete<EthSubscribeToken>(
			`${this.config!.baseUrl}/coins/eth/push-notifications/addresses/:addresses?firebase_token=${token}&types=:types`
				.replace(':addresses', addresses.join(','))
				.replace(':types', types.join(',')),
		);

		return unsubscribeToken.status === CODE.OK;
	}
}
