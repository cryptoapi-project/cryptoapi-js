import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../../constants/inversify.constants';

import { TEthContractCall } from '../../../../types/call.contract.type';
import { EthContract } from '../../../../dtos/eth/eth.contract.dto';

import { IEthContractApi } from '../../../../interfaces/clients/eth/apis/eth.sub.apis/eth.contract.api.interface';
import { IHttpService } from '../../../../interfaces/providers/http.service.interface';
import { AbstractApi } from '../../../../abstracts/abstract.api';

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
	 * @return {Promise<EthContract>}
	 */
	async getContractInfo(address: string): Promise<EthContract> {
		this._checkConfig();
		const contractInfo = await this.httpService.agent.get<EthContract>(
			`${this.config!.baseUrl}${'/coins/eth/contracts/:address/info'.replace(':address', address)}`,
		);
		return new EthContract(contractInfo.data);
	}

	/**
	 * Method to call contract.
	 * @method callContract
	 * @param {TEthContractCall} data
	 * @return {Promise<string>}
	 */
	async callContract({ address, ...dataToCall }: TEthContractCall): Promise<string> {
		this._checkConfig();

		const calledContract = await this.httpService.agent.post<string>(
			`${this.config!.baseUrl}${'/coins/eth/contracts/:address/call'.replace(':address', address)}`,
			dataToCall,
		);

		return calledContract.data;
	}
}