import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../../constants/inversify.constants';
import { AbstractApi } from '../../../../abstracts/abstract.api';
import { IUtxoAddressApi } from '../../../../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.address.api.interface';
import { IHttpService } from '../../../../interfaces/providers/http.service.interface';
import { UtxoAddressInfo } from '../../../../dtos/utxo/utxo.address.info';
import { IValidateHelper } from '../../../../interfaces/providers/helpers/validate.helper.interface';
import { BaseLibraryException } from '../../../../exceptions/library.exceptions/base.exception';

@injectable()
export class UtxoAddressApi extends AbstractApi implements IUtxoAddressApi {

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IValidateHelper) private readonly validateHelper: IValidateHelper,
	) {
		super();
	}

	/**
	 * @method getAddressesInfos
	 * @param {string[]} addresses
	 * @return {Promise<UtxoAddressInfo[]>}
	 */
	async getAddressesInfos(addresses: string[]): Promise<UtxoAddressInfo[]> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses) || !addresses.length) {
			throw new BaseLibraryException(`Addresses are required`);
		}

		const joinedAddresses = addresses.join(',');
		const infos = await this.httpService.agent.get<any>(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/addresses/${joinedAddresses}/info`,
		);

		return infos.data.map((info: UtxoAddressInfo) => new UtxoAddressInfo(info));
	}
}
