import { inject, injectable } from 'inversify';

import { AbstractApi } from '@src/abstracts/abstract.api';
import { TYPES_DI } from '@src/constants/inversify.constants';
import { BaseLibraryException } from '@src/exceptions/library.exceptions/base.exception';
import { IEthAddressApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.address.api.interface';
import { IValidateHelper } from '@src/interfaces/providers/helpers/validate.helper.interface';
import { IHttpService } from '@src/interfaces/providers/http.service.interface';

@injectable()
export class EthAddressApi<TAddressBalance, TAddressInfo> extends AbstractApi implements IEthAddressApi<TAddressBalance, TAddressInfo> {

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IValidateHelper) private readonly validateHelper: IValidateHelper,
	) {
		super();
	}

	/**
	 * Get address balances.
	 * @method getAddressesBalances
	 * @param {string[]} addresses
	 * @return {Promise<TAddressBalance[]>}
	 */
	async getAddressesBalances(addresses: string[]): Promise<TAddressBalance[]> {
		this._checkConfig();
		if (!this.validateHelper.isArray(addresses) || !addresses.length) {
			throw new BaseLibraryException('Addresses must be an no empty array.');
		}

		const addressesBalances = await this.httpService.agent.get(
			`${this.config!.baseUrl}${`/coins/${this.config!.coin}/addresses/:addresses/balance`
				.replace(':addresses', addresses.join(','))}`,
		);
		return addressesBalances.data;
	}

	/**
	 * Get addresses infos.
	 * @method getAddressesInfos
	 * @param {string[]} addresses
	 * @return {Promise<TAddressInfo[]>}
	 */
	async getAddressesInfos(addresses: string[]): Promise<TAddressInfo[]> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses) || !addresses.length) {
			throw new BaseLibraryException('Addresses must be an no empty array.');
		}

		const addressesInfos = await this.httpService.agent.get(
			`${this.config!.baseUrl}${`/coins/${this.config!.coin}/addresses/:addresses`
				.replace(':addresses', addresses.join(','))}`);
		return addressesInfos.data;
	}
}
