import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';

import { EthBlockInfo } from '../../../dtos/eth/eth.block.dtos';

import { IEthBlockApi } from '../../../interfaces/eth.apis/eth.sub.apis/eth.block.interface';
import { IHttpService } from '../../../interfaces/providers/http.service.interface';

import { AbstractApi } from '../../../abstracts/abstract.api';

@injectable()
export class EthBlockApi extends AbstractApi implements IEthBlockApi {

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
	) {
		super();
	}

	/**
	 * @method getBlock
	 * Method to get block information.
	 * @param {Number} blockNumber
	 * @return {Promise<EthBlockInfo>}
	 */
	async getBlock(blockNumber: number): Promise<EthBlockInfo> {
		this._checkConfig();

		const blockInfo = await this.httpService.agent.get<EthBlockInfo>(
			`${this.config!.baseUrl}/coins/eth/blocks/${blockNumber}`,
		);

		return new EthBlockInfo(blockInfo.data);
	}
}
