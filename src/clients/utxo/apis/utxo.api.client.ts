import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';
import { IUtxoApiClient } from '../../../interfaces/clients/utxo/apis/utxo.api.client.interface';
import { IServerConfig } from '../../../interfaces/configs/crypto.config.interface';
import { TryCatch } from '../../../providers/decorators/try.catch';
import { IUtxoBlockApi } from '../../../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.block.interface';
import { IUtxoMainInfoApi } from '../../../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.main.info.interface';

@injectable()
export class UtxoApiClient implements IUtxoApiClient {
	config: IServerConfig|null = null;

	constructor(
		@inject(TYPES_DI.IUtxoMainInfoApi) private readonly utxoMainInfo: IUtxoMainInfoApi,
		@inject(TYPES_DI.IUtxoBlockApi) private readonly utxoBlockApi: IUtxoBlockApi,
	) {}

	/**
	 * Set config to eth api.
	 * @method configure
	 * @param {IServerConfig} config
	 * @return {void}
	 */
	configure(config: IServerConfig) {
		this.utxoMainInfo.configure(config);
		this.utxoBlockApi.configure(config);
	}

	/**
	 * Get utxo network full information.
	 * @method getNetworkInfo
	 * @return {Promise<UtxoNetworkInfo>}
	 */
	@TryCatch
	async getNetworkInfo() {
		return this.utxoMainInfo.getNetworkInfo();
	}

	/**
	 * Get utxo blocks information by block hash and height.
	 * @method getBlocks
	 * @ param {Array<string|number>} requestedBlocks
	 * @return {Promise<UtxoBlockInfo[]>}
	 */
	@TryCatch
	async getBlocks(requestedBlocks: Array<string|number>) {
		return this.utxoBlockApi.getBlocks(requestedBlocks);
	}
}
