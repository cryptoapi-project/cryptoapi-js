
import { inject, injectable } from 'inversify';

import { AbstractApi } from '@src/abstracts/abstract.api';
import { TYPES_DI } from '@src/constants/inversify.constants';
import { UtxoOutput } from '@src/dtos/utxo/utxo.output';
import { InternalLibraryException } from '@src/exceptions/library.exceptions/internal.library.exception';
import { IUtxoOutputsApi } from '@src/interfaces/clients/utxo/apis/utxo.sub.apis/utxo.outputs.interface';
import { IUrlHelper } from '@src/interfaces/providers/helpers/url.helper.interface';
import { IValidateHelper } from '@src/interfaces/providers/helpers/validate.helper.interface';
import { IHttpService } from '@src/interfaces/providers/http.service.interface';
import { TUtxoOutputsOptions } from '@src/types/utxo/utxo.outputs.options';

@injectable()
export class UtxoOutputsApi extends AbstractApi implements IUtxoOutputsApi {

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IValidateHelper) private readonly validateHelper: IValidateHelper,
		@inject(TYPES_DI.IUrlHelper) private readonly urlHelper: IUrlHelper,
	) {
		super();
	}

	/**
	 * @method getOutputsByAddresses
	 * @param {string[]} addresses
	 * @param {TUtxoOutputsOptions} options
	 * @return {Promise<UtxoOutput[]>}
	 */
	async getOutputsByAddresses(addresses: string[], options: TUtxoOutputsOptions): Promise<UtxoOutput[]> {
		this._checkConfig();

		if (!this.validateHelper.isArray(addresses) || !addresses.length) {
			throw new InternalLibraryException('Addresses are required.');
		}

		const query = `${this.urlHelper.addOptionsToUrl('', options)}`;

		const joinedAddresses = addresses.join(',');
		const outputs = await this.httpService.agent.get<UtxoOutput[]>(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/addresses/${joinedAddresses}/outputs${query}`,
		);

		return outputs.data.map((output) => new UtxoOutput(output));
	}
}
