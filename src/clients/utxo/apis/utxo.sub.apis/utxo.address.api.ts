import { inject, injectable } from 'inversify';

import { AbstractApi } from '@src/abstracts/abstract.api';
import { TYPES_DI } from '@src/constants/inversify.constants';
import { UtxoAddressHistory } from '@src/dtos/utxo/utxo.address.history';
import { UtxoAddressInfo } from '@src/dtos/utxo/utxo.address.info';
import { BaseLibraryException } from '@src/exceptions/library.exceptions/base.exception';
import { InternalLibraryException } from '@src/exceptions/library.exceptions/internal.library.exception';
import { IUtxoAddressApi } from '@src/interfaces/clients/utxo/apis/utxo.sub.apis/utxo.address.api.interface';
import { IUrlHelper } from '@src/interfaces/providers/helpers/url.helper.interface';
import { IValidateHelper } from '@src/interfaces/providers/helpers/validate.helper.interface';
import { IHttpService } from '@src/interfaces/providers/http.service.interface';
import { TPaginationOptions } from '@src/types/paginations.options.type';

@injectable()
export class UtxoAddressApi extends AbstractApi implements IUtxoAddressApi {

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IValidateHelper) private readonly validateHelper: IValidateHelper,
		@inject(TYPES_DI.IUrlHelper) private readonly urlHelper: IUrlHelper,
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
			`${this.config!.baseUrl}/coins/${this.config!.coin}/addresses/${joinedAddresses}`,
		);

		return infos.data.map((info: UtxoAddressInfo) => new UtxoAddressInfo(info));
	}

	/**
	 * method getAddressesInfos
	 * @param {string[]} addresses
	 * @param {TPaginationOptions} options?
	 * @return {Promise<UtxoAddressInfo[]>}
	 */
	async getAddressesHistory(addresses: string[], options?: TPaginationOptions): Promise<UtxoAddressHistory> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses) || !addresses.length) {
			throw new InternalLibraryException('Addresses are required.');
		}

		const query = `${this.urlHelper.addOptionsToUrl('', options)}`;

		const joinedAddresses = addresses.join(',');
		const history = await this.httpService.agent.get<UtxoAddressHistory>(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/addresses/${joinedAddresses}/transactions${query}`,
		);

		return new UtxoAddressHistory(history.data);
	}

}
