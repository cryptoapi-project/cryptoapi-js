import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../constants/inversify.constants';

import { IEthApiClient } from '../../interfaces/eth.apis/eth.api.client.interface';
import { IEthMainInfoApi } from '../../interfaces/eth.apis/eth.sub.apis/eth.main.info.interface';
import { IEthNotifyApi } from '../../interfaces/eth.apis/eth.sub.apis/eth.notify.api.interface';
import { IServerConfig } from '../../interfaces/configs/crypto.config.interface';
import { TryCatch } from '../../providers/decorators/try.catch';

@injectable()
export class EthApiClient implements IEthApiClient {
	constructor(
		@inject(TYPES_DI.IEthMainInfoApi)
		private readonly ethMainInfo: IEthMainInfoApi,
		@inject(TYPES_DI.IEthNotifyApi)
		private readonly ethNotify: IEthNotifyApi,
	) {}

	/**
	 * Set config to eth api.
	 * @method
	 * @name configure
	 * @param {IServerConfig} config
	 * @return {void}
	 */
	configure(config: IServerConfig) {
		this.ethMainInfo.config = config;
	}

	/**
	 * Get eth network full information.
	 * @method
	 * @name getNetworkInfo
	 * @return {Promise<EthNetworkInfo>}
	 */
	@TryCatch
	async getNetworkInfo() {
		return this.ethMainInfo.getNetworkInfo();
	}

	subscribeToken() {
		return this.ethNotify.subscribeToken();
	}

	unsubscribeToken() {
		return this.ethNotify.unsubscribeToken();
	}
}
