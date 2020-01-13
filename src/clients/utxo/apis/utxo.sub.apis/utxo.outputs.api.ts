import { inject, injectable } from 'inversify';
import { AbstractApi } from '../../../../abstracts/abstract.api';
import { IUtxoOutputsApi } from '../../../../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.outputs.interface';
import { TYPES_DI } from '../../../../constants/inversify.constants';
import { IHttpService } from '../../../../interfaces/providers/http.service.interface';
import { IValidateHelper } from '../../../../interfaces/providers/helpers/validate.helper.interface';
import { IUrlHelper } from '../../../../interfaces/providers/helpers/url.helper.interface';
import { InternalLibraryException } from '../../../../exceptions/library.exceptions/internal.library.exception';
import { UtxoOutput } from '../../../../dtos/utxo/utxo.output';
import { TUtxoOutputsOptions } from '../../../../types/utxo/utxo.outputs.options';

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
