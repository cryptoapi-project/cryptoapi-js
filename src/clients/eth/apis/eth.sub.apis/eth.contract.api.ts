import { inject, injectable } from 'inversify';

import { AbstractApi } from '@src/abstracts/abstract.api';
import { TYPES_DI } from '@src/constants/inversify.constants';
import { IEthContractApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.contract.api.interface';
import { IUrlHelper } from '@src/interfaces/providers/helpers/url.helper.interface';
import { IHttpService } from '@src/interfaces/providers/http.service.interface';
import { TContractCall } from '@src/types/eth/call.contract.type';
import { TContractLogsRequest } from '@src/types/eth/contract.logs.request.type';

@injectable()
export class EthContractApi<TContract, TContractLog> extends AbstractApi implements IEthContractApi<TContract, TContractLog> {
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
	 * @return {Promise<TContract>}
	 */
	async getContractInfo(address: string): Promise<TContract> {
		this._checkConfig();
		const { data } = await this.httpService.agent.get<TContract>(
			`${this.config!.baseUrl}/coins/${this.config!.coin}${'/contracts/:address'.replace(':address', address)}`,
		);
		return data;
	}

	/**
	 * Method to call contract.
	 * @method callContract
	 * @param {TContractCall} data
	 * @return {Promise<string>}
	 */
	async callContract({ address, ...dataToCall }: TContractCall): Promise<string> {
		this._checkConfig();

		const { data } = await this.httpService.agent.post<string>(
			`${this.config!.baseUrl}/coins/${this.config!.coin}${'/contracts/:address/call'.replace(':address', address)}`,
			dataToCall,
		);

		return data;
	}

	/**
	 * Method to get contract logs.
	 * @method getContractLogs
	 * @param {TContractLogsRequest} params
	 * @return {Promise<TContractLog[]>}
	 */
	async getContractLogs(params: TContractLogsRequest): Promise<TContractLog[]> {
		this._checkConfig();

		let url = `${this.config!.baseUrl}/coins/${this.config!.coin}/contracts/logs`;
		url = this.urlHelper.addOptionsToUrl(url, params);

		const { data } = await this.httpService.agent.get<TContractLog[]>(url);

		return data;
	}
}
