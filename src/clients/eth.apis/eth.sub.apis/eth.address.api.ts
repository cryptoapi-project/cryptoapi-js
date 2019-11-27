import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';

import { IEthAddressApi } from '../../../interfaces/eth.apis/eth.sub.apis/eth.address.api.interface';
import { EthAddressBalance } from '../../../dtos/eth.address.balance';
import { IHttpService } from '../../../interfaces/providers/http.service.interface';
import { AbstractApi } from '../../../abstracts/abstract.api';

@injectable()
export class EthAddressApi  extends AbstractApi implements IEthAddressApi {

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
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
		const addressesBalances = await this.httpService.agent.get<EthAddressBalance[]>(
			`${this.config!.baseUrl}${'/coins/eth/accounts/:addresses/balance'
				.replace(':addresses', addresses.join(','))}`,
		);
		return addressesBalances.data;
	}

}
