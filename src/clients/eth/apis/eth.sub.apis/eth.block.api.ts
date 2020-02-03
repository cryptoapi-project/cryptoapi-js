import { inject, injectable } from 'inversify';

import { AbstractApi } from '@src/abstracts/abstract.api';
import { TYPES_DI } from '@src/constants/inversify.constants';
import { IEthBlockApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.block.interface';
import { IUrlHelper } from '@src/interfaces/providers/helpers/url.helper.interface';
import { IHttpService } from '@src/interfaces/providers/http.service.interface';
import { TPaginationOptions } from '@src/types/paginations.options.type';

@injectable()
export class EthBlockApi<TBlockInfo, TBlocksResponse> extends AbstractApi
	implements IEthBlockApi<TBlockInfo, TBlocksResponse> {

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
	 * @return {Promise<TBlockInfo>}
	 */
	async getBlock(blockNumberOrHash: number | string): Promise<TBlockInfo> {
		this._checkConfig();

		const blockInfo = await this.httpService.agent.get<TBlockInfo>(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/blocks/${blockNumberOrHash}`,
		);

		return blockInfo.data;
	}

	/**
	 * @method getBlocks
	 * Method to get all blocks.
	 * @param {TPaginationOptions} options
	 * @return {Promise<TBlocksResponse>}
	 */
	async getBlocks(options: TPaginationOptions): Promise<TBlocksResponse> {
		this._checkConfig();

		let url = `${this.config!.baseUrl}/coins/${this.config!.coin}/blocks`;
		url = this.urlHelper.addOptionsToUrl(url, options);

		const blockInfo = await this.httpService.agent.get<TBlocksResponse>(url);

		return blockInfo.data;
	}
}
