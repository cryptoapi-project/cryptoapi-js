import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';

import { IEthContractApi } from '../../../interfaces/eth.apis/eth.sub.apis/eth.contract.api.interface';
import { IHttpService } from '../../../interfaces/providers/http.service.interface';
import { AbstractApi } from '../../../abstracts/abstract.api';
import { EthContractInfo } from '../../../dtos/eth/eth.contract.info';

@injectable()
export class EthContractApi extends AbstractApi implements IEthContractApi {
	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
	) {
		super();
	}

	/**
	 * Method to get contract information, example as bytecode.
	 * @method getContractInfo
	 * @param {string} address
	 * @return {Promise<EthContractInfo>}
	 */
	async getContractInfo(address: string): Promise<EthContractInfo> {
		this._checkConfig();
		const contractInfo = await this.httpService.agent.get<EthContractInfo>(
			`${this.config!.baseUrl}${'/coins/eth/contracts/:address/info'.replace(':address', address)}`,
		);
		return contractInfo.data;
	}
}
