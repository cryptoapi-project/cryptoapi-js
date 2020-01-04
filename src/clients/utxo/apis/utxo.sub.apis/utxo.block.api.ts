import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../../constants/inversify.constants';
import { AbstractApi } from '../../../../abstracts/abstract.api';
import { IUtxoBlockApi } from '../../../../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.block.interface';
import { IHttpService } from '../../../../interfaces/providers/http.service.interface';
import { UtxoBlockInfo } from '../../../../dtos/utxo/utxo.block.dtos';
import { BaseLibraryException } from '../../../../exceptions/library.exceptions/base.exception';
import { IValidateHelper } from '../../../../interfaces/providers/helpers/validate.helper.interface';

@injectable()
export class UtxoBlockApi extends AbstractApi implements IUtxoBlockApi {

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IValidateHelper) private readonly validateHelper: IValidateHelper,
	) {
		super();
	}

	/**
	 * @method getBlocks
	 * Method to get block information.
	 * @param {Array<string|number>} requestedBlocks
	 * @return {Promise<UtxoBlockInfo[]>}
	 */
	async getBlocks(requestedBlocks: Array<string|number>): Promise<UtxoBlockInfo[]> {
		this._checkConfig();

		if (!this.validateHelper.isArray(requestedBlocks) || !requestedBlocks.length) {
			throw new BaseLibraryException(`Blocks infos are required`);
		}

		const joinedBlocks = requestedBlocks.join(',');
		const blocks = await this.httpService.agent.get<any>(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/blocks?blocks=${joinedBlocks}`,
		);

		return blocks.data.map((block: UtxoBlockInfo) => new UtxoBlockInfo(block));
	}

	/**
	 * @method getBlock
	 * Method to get block information by hash or height.
	 * @param {string | number} heightOrHash
	 * @return {Promise<UtxoBlockInfo[]>}
	 */
	async getBlock(heightOrHash: string | number): Promise<UtxoBlockInfo> {
		this._checkConfig();

		const block = await this.httpService.agent.get<UtxoBlockInfo>(
			`${this.config!.baseUrl}/coins/${this.config!.coin}/blocks/${heightOrHash}`,
		);

		return new UtxoBlockInfo(block.data);
	}

}
