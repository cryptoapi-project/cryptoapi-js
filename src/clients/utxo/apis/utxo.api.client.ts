import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';
import { IUtxoApiClient } from '../../../interfaces/clients/utxo/apis/utxo.api.client.interface';
import { IServerConfig } from '../../../interfaces/configs/crypto.config.interface';
import { TryCatch } from '../../../providers/decorators/try.catch';
import { IUtxoBlockApi } from '../../../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.block.interface';
import { IUtxoMainInfoApi } from '../../../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.main.info.interface';
import { IUtxoRawTransactionApi } from '../../../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.raw.transaction.interface';
import { IUtxoTransactionsApi } from '../../../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.transactions.interface';
import { IUtxoAddressApi } from '../../../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.address.api.interface';
import { TPaginationOptions } from 'types/paginations.options.type';

@injectable()
export class UtxoApiClient implements IUtxoApiClient {

	config: IServerConfig|null = null;

	constructor(
		@inject(TYPES_DI.IUtxoMainInfoApi) private readonly utxoMainInfo: IUtxoMainInfoApi,
		@inject(TYPES_DI.IUtxoBlockApi) private readonly utxoBlockApi: IUtxoBlockApi,
		@inject(TYPES_DI.IUtxoRawTransactionApi) private readonly utxoRawTransactionApi: IUtxoRawTransactionApi,
		@inject(TYPES_DI.IUtxoTransactionsApi) private readonly utxoTransactionsApi: IUtxoTransactionsApi,
		@inject(TYPES_DI.IUtxoAddressApi) private readonly utxoAddressApi: IUtxoAddressApi,
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
	 * Get full transactions info by block height or hash.
	 * @method getTransactionsByBlockHeightOrHash
	 * @param {string|number} blockHeightOrHash
	 * @return {Promise<FullUtxoTransaction[]>}
	 */
	@TryCatch
	async getTransactionsByBlockHeightOrHash(blockHeightOrHash: string | number) {
		return this.utxoTransactionsApi.getTransactionsByBlockHeightOrHash(blockHeightOrHash);
	}

	/**
	 * Get utxo transactions information by hashes.
	 * @method getTransactionsByHashes
	 * @ param {string[]} hashes
	 * @return {Promise<FullUtxoTransaction[]>}
	 */
	@TryCatch
	async getTransactionsByHashes(hashes: string[]) {
		return this.utxoTransactionsApi.getTransactionsByHashes(hashes);
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

}
