import { inject, injectable } from 'inversify';

import { AbstractApi } from '@src/abstracts/abstract.api';
import { TYPES_DI } from '@src/constants/inversify.constants';
import { EthAddressBalance } from '@src/dtos/eth/eth.address.balance';
import { EthAddressInfo } from '@src/dtos/eth/eth.address.info';
import { BaseLibraryException } from '@src/exceptions/library.exceptions/base.exception';
import { IEthAddressApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.address.api.interface';
import { IValidateHelper } from '@src/interfaces/providers/helpers/validate.helper.interface';
import { IHttpService } from '@src/interfaces/providers/http.service.interface';

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
