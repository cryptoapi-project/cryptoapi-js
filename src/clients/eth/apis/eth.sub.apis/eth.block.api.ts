import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../../constants/inversify.constants';

import { EthBlockInfo, EthBlocksResponse } from '../../../../dtos/eth/eth.block.dtos';

import { IEthBlockApi } from '../../../../interfaces/clients/eth/apis/eth.sub.apis/eth.block.interface';
import { IHttpService } from '../../../../interfaces/providers/http.service.interface';

import { AbstractApi } from '../../../../abstracts/abstract.api';
import { TPaginationOptions } from '../../../../types/paginations.options.type';
import { IUrlHelper } from '../../../../interfaces/providers/helpers/url.helper.interface';

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
