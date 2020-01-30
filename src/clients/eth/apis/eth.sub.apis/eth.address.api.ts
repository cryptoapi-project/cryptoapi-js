import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../../constants/inversify.constants';

import { IEthAddressApi } from '../../../../interfaces/clients/eth/apis/eth.sub.apis/eth.address.api.interface';

import { AbstractApi } from '../../../../abstracts/abstract.api';
import { BaseLibraryException } from '../../../../exceptions/library.exceptions/base.exception';
import { IValidateHelper } from '../../../../interfaces/providers/helpers/validate.helper.interface';
import { IHttpService } from '../../../../interfaces/providers/http.service.interface';

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
