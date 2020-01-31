import { inject, injectable } from 'inversify';

import { AbstractApi } from '@src/abstracts/abstract.api';
import { TYPES_DI } from '@src/constants/inversify.constants';
import { EthBlockInfo, EthBlocksResponse } from '@src/dtos/eth/eth.block.dtos';
import { IEthBlockApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.block.interface';
import { IUrlHelper } from '@src/interfaces/providers/helpers/url.helper.interface';
import { IHttpService } from '@src/interfaces/providers/http.service.interface';
import { TPaginationOptions } from '@src/types/paginations.options.type';

@injectable()
export class EthBlockApi extends AbstractApi implements IEthBlockApi {

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IUrlHelper) private readonly urlHelper: IUrlHelper,
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

	/**
	 * @method getBlocks
	 * Method to get all blocks.
	 * @param {TPaginationOptions} options
	 * @return {Promise<EthBlocksResponse>}
	 */
	async getBlocks(options: TPaginationOptions): Promise<EthBlocksResponse> {
		this._checkConfig();

		let url = `${this.config!.baseUrl}/coins/eth/blocks`;
		url = this.urlHelper.addOptionsToUrl(url, options);

		const blockInfo = await this.httpService.agent.get<EthBlocksResponse>(url);

		return new EthBlocksResponse(blockInfo.data);
	}
}
