import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../../constants/inversify.constants';

import { EthAddressBalance } from '../../../../dtos/eth/eth.address.balance';
import { EthAddressInfo } from '../../../../dtos/eth/eth.address.info';
import { IEthAddressApi } from '../../../../interfaces/clients/eth/apis/eth.sub.apis/eth.address.api.interface';

import { IHttpService } from '../../../../interfaces/providers/http.service.interface';
import { AbstractApi } from '../../../../abstracts/abstract.api';
import { IValidateHelper } from '../../../../interfaces/providers/helpers/validate.helper.interface';
import { BaseLibraryException } from '../../../../exceptions/library.exceptions/base.exception';

@injectable()
export class EthAddressApi  extends AbstractApi implements IEthAddressApi {

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IValidateHelper) private readonly validateHelper: IValidateHelper,
	) {
		super();
	}

	/**
	 * Get eth address balances.
	 * @method getAddressesBalances
	 * @param {string[]} addresses
	 * @return {Promise<EthAddressBalance[]>}
	 */
	async getAddressesBalances(addresses: string[]): Promise<EthAddressBalance[]> {
		this._checkConfig();
		if (!this.validateHelper.isArray(addresses)) {
			throw new BaseLibraryException('Addresses must be an array.');
		}

		const addressesBalances = await this.httpService.agent.get<EthAddressBalance[]>(
			`${this.config!.baseUrl}${'/coins/eth/addresses/:addresses/balance'
				.replace(':addresses', addresses.join(','))}`,
		);
		return addressesBalances.data.map((data: EthAddressBalance) => new EthAddressBalance(data));
	}

	/**
	 * Get eth addresses infos.
	 * @method getAddressesInfos
	 * @param {string[]} addresses
	 * @return {Promise<EthAddressInfo[]>}
	 */
	async getAddressesInfos(addresses: string[]): Promise<EthAddressInfo[]> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses)) {
			throw new BaseLibraryException('Addresses must be an array.');
		}

		const addressesInfos = await this.httpService.agent.get<EthAddressInfo[]>(
			`${this.config!.baseUrl}${'/coins/eth/addresses/:addresses'.replace(':addresses', addresses.join(','))}`);
		return addressesInfos.data.map((data: EthAddressInfo) => new EthAddressInfo(data));
	}

}
