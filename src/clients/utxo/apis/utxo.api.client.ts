import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';
import { IUtxoApiClient } from '../../../interfaces/clients/utxo/apis/utxo.api.client.interface';
import { IServerConfig } from '../../../interfaces/configs/crypto.config.interface';
import { IUtxoMainInfoApi } from '../../../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.main.info.interface';
import { TryCatch } from '../../../providers/decorators/try.catch';

@injectable()
export class UtxoApiClient implements IUtxoApiClient {
	config: IServerConfig|null = null;

	constructor(
		@inject(TYPES_DI.IUtxoMainInfoApi) private readonly utxoMainInfo: IUtxoMainInfoApi,
	) {}

	/**
	 * Set config to eth api.
	 * @method configure
	 * @param {IServerConfig} config
	 * @return {void}
	 */
	configure(config: IServerConfig) {
		this.utxoMainInfo.configure(config);
	}

	/**
	 * Get eth network full information.
	 * @method getNetworkInfo
	 * @return {Promise<UtxoNetworkInfo>}
	 */
	@TryCatch
	async getNetworkInfo() {
		return this.utxoMainInfo.getNetworkInfo();
	}
}
