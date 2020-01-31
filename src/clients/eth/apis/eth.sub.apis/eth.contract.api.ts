import { inject, injectable } from 'inversify';

import { AbstractApi } from '@src/abstracts/abstract.api';
import { TYPES_DI } from '@src/constants/inversify.constants';
import { EthContract, EthContractLog } from '@src/dtos/eth/eth.contract.dto';
import { IEthContractApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.contract.api.interface';
import { IUrlHelper } from '@src/interfaces/providers/helpers/url.helper.interface';
import { IHttpService } from '@src/interfaces/providers/http.service.interface';
import { TEthContractCall } from '@src/types/eth/call.contract.type';
import { TContractLogsRequest } from '@src/types/eth/eth.contract.logs.request';

@injectable()
export class EthContractApi extends AbstractApi implements IEthContractApi {
	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IUrlHelper) private readonly urlHelper: IUrlHelper,
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
			`${this.config!.baseUrl}${'/coins/eth/contracts/:address'.replace(':address', address)}`,
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

	/**
	 * Method to get contract logs.
	 * @method getContractLogs
	 * @param {TContractLogsRequest} data
	 * @return {Promise<EthContractLog[]>}
	 */
	async getContractLogs(data: TContractLogsRequest): Promise<EthContractLog[]> {
		this._checkConfig();

		let url = `${this.config!.baseUrl}/coins/eth/contracts/logs`;
		url = this.urlHelper.addOptionsToUrl(url, data);

		const logs = await this.httpService.agent.get<EthContractLog[]>(url);

		return logs.data.map((log) => new EthContractLog(log));
	}
}
