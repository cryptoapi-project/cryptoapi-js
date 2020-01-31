import { inject, injectable } from 'inversify';

import { AbstractApi } from '@src/abstracts/abstract.api';
import { TYPES_DI } from '@src/constants/inversify.constants';
import { UtxoNetworkInfo } from '@src/dtos/utxo/utxo.network.info';
import { IUtxoMainInfoApi } from '@src/interfaces/clients/utxo/apis/utxo.sub.apis/utxo.main.info.interface';
import { IHttpService } from '@src/interfaces/providers/http.service.interface';

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
