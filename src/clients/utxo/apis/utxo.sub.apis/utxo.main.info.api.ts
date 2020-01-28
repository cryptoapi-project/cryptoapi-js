import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../../constants/inversify.constants';

import { AbstractApi } from '../../../../abstracts/abstract.api';
import { UtxoNetworkInfo } from '../../../../dtos/utxo/utxo.network.info';
import { IUtxoMainInfoApi } from '../../../../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.main.info.interface';
import { IHttpService } from '../../../../interfaces/providers/http.service.interface';

@injectable()
export class UtxoMainInfoApi extends AbstractApi implements IUtxoMainInfoApi {

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
	) {
		super();
	}

	/**
	 * Method to get network information.
	 * @method getNetworkInfo
	 * @return {Promise<UtxoNetworkInfo>>}
	 */
	async getNetworkInfo(): Promise<UtxoNetworkInfo> {
		this._checkConfig();

		const networkInfo = await this.httpService.agent.get<UtxoNetworkInfo>(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/network`,
		);
		return new UtxoNetworkInfo(networkInfo.data);
	}

}
