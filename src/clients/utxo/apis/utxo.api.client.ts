import { inject, injectable } from 'inversify';

import { TYPES_DI } from '@src/constants/inversify.constants';
import { ServerConfig } from '@src/dtos/crypto.config';
import { IUtxoApiClient } from '@src/interfaces/clients/utxo/apis/utxo.api.client.interface';
import { IUtxoAddressApi } from '@src/interfaces/clients/utxo/apis/utxo.sub.apis/utxo.address.api.interface';
import { IUtxoBlockApi } from '@src/interfaces/clients/utxo/apis/utxo.sub.apis/utxo.block.interface';
import { IUtxoMainInfoApi } from '@src/interfaces/clients/utxo/apis/utxo.sub.apis/utxo.main.info.interface';
import { IUtxoOutputsApi } from '@src/interfaces/clients/utxo/apis/utxo.sub.apis/utxo.outputs.interface';
import { IUtxoRawTransactionApi } from '@src/interfaces/clients/utxo/apis/utxo.sub.apis/utxo.raw.transaction.interface';
import { IUtxoTransactionsApi } from '@src/interfaces/clients/utxo/apis/utxo.sub.apis/utxo.transactions.interface';
import { IServerConfig, IUtxoServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { TryCatch } from '@src/providers/decorators/try.catch';
import { TPaginationOptions } from '@src/types/paginations.options.type';
import { TUtxoOutputsOptions } from '@src/types/utxo/utxo.outputs.options';
import { TTransactionsRequest } from '@src/types/utxo/utxo.transactions.request';

@injectable()
export class UtxoApiClient implements IUtxoApiClient {

	config: IServerConfig|null = null;

	constructor(
		@inject(TYPES_DI.IUtxoMainInfoApi) private readonly utxoMainInfo: IUtxoMainInfoApi,
		@inject(TYPES_DI.IUtxoBlockApi) private readonly utxoBlockApi: IUtxoBlockApi,
		@inject(TYPES_DI.IUtxoRawTransactionApi) private readonly utxoRawTransactionApi: IUtxoRawTransactionApi,
		@inject(TYPES_DI.IUtxoTransactionsApi) private readonly utxoTransactionsApi: IUtxoTransactionsApi,
		@inject(TYPES_DI.IUtxoAddressApi) private readonly utxoAddressApi: IUtxoAddressApi,
		@inject(TYPES_DI.IUtxoOutputsApi) private readonly utxoOutputsApi: IUtxoOutputsApi,
	) {}

	/**
	 * Set config to eth api.
	 * @method configure
	 * @param {IServerConfig} config
	 * @return {void}
	 */
	configure(config: IServerConfig) {
		this.utxoMainInfo.configure(config);
		this.utxoBlockApi.configure(config);
		this.utxoRawTransactionApi.configure(config);
		this.utxoTransactionsApi.configure(config);
		this.utxoAddressApi.configure(config);
		this.utxoOutputsApi.configure(config);
	}

	/**
	 * Get utxo network full information.
	 * @method getNetworkInfo
	 * @return {Promise<UtxoNetworkInfo>}
	 */
	@TryCatch
	async getNetworkInfo() {
		return this.utxoMainInfo.getNetworkInfo();
	}

	/**
	 * Get utxo block information by block hash or height.
	 * @method getBlock
	 * @ param {string|number} heightOrHash
	 * @return {Promise<UtxoBlockInfo>}
	 */
	@TryCatch
	async getBlock(heightOrHash: string|number) {
		return this.utxoBlockApi.getBlock(heightOrHash);
	}

	/**
	 * Get utxo blocks information by block hash and height.
	 * @method getBlocks
	 * @ param {Array<string|number>} requestedBlocks
	 * @return {Promise<UtxoBlockInfo[]>}
	 */
	@TryCatch
	async getBlocks(requestedBlocks: Array<string|number>) {
		return this.utxoBlockApi.getBlocks(requestedBlocks);
	}

	/**
	 * Method to send raw transaction.
	 * @method sendRawTransaction
	 * @param {string} tr
	 * @return {Promise<string>}
	 */
	@TryCatch
	sendRawTransaction(tr: string): Promise<string> {
		return this.utxoRawTransactionApi.sendRawTransaction(tr);
	}

	/*
	 * Method decode raw transaction.
	 * @method decodeRawTransaction
	 * @param {string} tr
	 * @return {UtxoRawTransaction}
	 */
	@TryCatch
	decodeRawTransaction(tr: string) {
		return this.utxoRawTransactionApi.decodeRawTransaction(tr);
	}

	/**
	 * Get full utxo transaction information by hash.
	 * @method getFullTransactionInfo
	 * @param {string} hash
	 * @return {Promise<FullUtxoTransaction>}
	 */
	@TryCatch
	async getFullTransactionInfo(hash: string) {
		return this.utxoTransactionsApi.getFullTransactionInfo(hash);
	}

	/**
	 * Get utxo transactions information by params.
	 * @method getTransactions
	 * @param {TTransactionsRequest} params
	 * @param {TPaginationOptions} options?
	 * @return {Promise<FullUtxoTransaction[]>}
	 */
	@TryCatch
	async getTransactions(params: TTransactionsRequest, options?: TPaginationOptions) {
		return this.utxoTransactionsApi.getTransactions(params, options);
	}

	/**
	 * Get addresses infos.
	 * @method getAddressesInfos
	 * @param {string[]} addresses
	 * @return {Promise<UtxoAddressInfo[]>}
	 */
	@TryCatch
	async getAddressesInfos(addresses: string[] = []) {
		return this.utxoAddressApi.getAddressesInfos(addresses);
	}

	/**
	 * Get addresses history.
	 * @method getAddressesHistory
	 * @param {string[]} addresses
	 * @param {TPaginationOptions} options?
	 * @return {Promise<UtxoAddressHistory>}
	 */
	@TryCatch
	getAddressesHistory(addresses: string[], options?: TPaginationOptions) {
		return this.utxoAddressApi.getAddressesHistory(addresses, options);
	}

	/**
	 * Get outputs by addresses.
	 * @param {string[]} addresses
	 * @param {TUtxoOutputsOptions} options
	 * @return {Promise<UtxoOutput[]>}
	 */
	@TryCatch
	getOutputsByAddresses(addresses: string[], options: TUtxoOutputsOptions) {
		return this.utxoOutputsApi.getOutputsByAddresses(addresses, options);
	}
}

@injectable()
export class UtxoApi extends UtxoApiClient {
	testnet: IUtxoApiClient;

	constructor(
		@inject(TYPES_DI.IUtxoMainInfoApi) private readonly mainInfo: IUtxoMainInfoApi,
		@inject(TYPES_DI.IUtxoBlockApi) private readonly blockApi: IUtxoBlockApi,
		@inject(TYPES_DI.IUtxoRawTransactionApi) private readonly rawTransactionApi: IUtxoRawTransactionApi,
		@inject(TYPES_DI.IUtxoTransactionsApi) private readonly transactionsApi: IUtxoTransactionsApi,
		@inject(TYPES_DI.IUtxoAddressApi) private readonly addressApi: IUtxoAddressApi,
		@inject(TYPES_DI.IUtxoOutputsApi) private readonly outputsApi: IUtxoOutputsApi,
		@inject(TYPES_DI.IUtxoApiClient) testnet: IUtxoApiClient,
	) {
		super(
			mainInfo,
			blockApi,
			rawTransactionApi,
			transactionsApi,
			addressApi,
			outputsApi,
		);

		this.testnet = testnet;
	}

	/**
	 * Set config to utxo api.
	 * @method configure
	 * @param {IUtxoServerConfig} config
	 * @return {void}
	 */
	configure(config: IUtxoServerConfig) {
		super.configure(new ServerConfig(config));
		this.testnet.configure({ ...config, baseUrl: config.testnet.api });
	}

}
