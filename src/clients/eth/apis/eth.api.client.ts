import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';
import { EthAddressBalance } from '../../../dtos/eth/eth.address.balance';
import { EthAddressInfo } from '../../../dtos/eth/eth.address.info';
import { EthRawTransaction } from '../../../dtos/eth/eth.raw.transaction';
import {
	EthTransactionByAddresses, EthTransactionReceipt,
	EthTransactionsInterAddresses,
	EthTransactionsIntersection,
	FullEthTransaction,
} from '../../../dtos/eth/eth.transaction.dtos';

import { IEthContractApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.contract.api.interface';
import { TEthContractCall } from '../../../types/eth/call.contract.type';
import { TEstimateGasRequest } from '../../../types/eth/estimate.gas.request.type';
import { TContractLogsRequest } from '../../../types/eth/eth.contract.logs.request';
import { TPaginationOptions } from '../../../types/paginations.options.type';

import { IBaseEthApiClient } from '../../../interfaces/clients/eth/apis/eth.api.client.interface';
import { IEthAddressApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.address.api.interface';
import { IEthBlockApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.block.interface';
import { IEthMainInfoApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.main.info.interface';
import { IEthNotifyApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.notify.api.interface';
import { IEthRawTransactionApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.raw.transaction.interface';
import { IEthTokenApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.token.api.interface';
import { IEthTransactionsApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.transactions.interface';
import { IServerConfig } from '../../../interfaces/configs/crypto.config.interface';

import { EstimateGasResponse } from 'dtos/eth/eth.estimate.gas';
import { EthNetworkInfo } from '../../../dtos/eth/eth.network.info';
import { EthTokenSearchRequest } from '../../../dtos/eth/eth.token.search';
import { EthTokenTransfersByAddressesRequest, EthTokenTransfersRequest } from '../../../dtos/eth/eth.transfer.dto';
import { IBaseEthFactoryDto, IEthFactoryDto } from '../../../interfaces/clients/eth/apis/eth.api.factory.dto.interface';
import { TryCatch } from '../../../providers/decorators/try.catch';

@injectable()
export class BaseEthApiClient<
	TNetworkInfo, TEstimateGasResponse,
	TAddressBalance, TAddressInfo,
	TRawTransaction,
	TTransactionByAddresses, TTransactionsIntersection,
	TFullTransaction, TTransactionsInterAddresses,
	TTransactionReceipt
> implements IBaseEthApiClient<
	TNetworkInfo, TEstimateGasResponse,
	TAddressBalance, TAddressInfo,
	TRawTransaction,
	TTransactionByAddresses, TTransactionsIntersection,
	TFullTransaction, TTransactionsInterAddresses,
	TTransactionReceipt
> {
	config: IServerConfig|null = null;
	constructor(
		private readonly mainInfo: IEthMainInfoApi<TNetworkInfo, TEstimateGasResponse>,
		private readonly ethTokenInfo: IEthTokenApi,
		private readonly ethAddressInfo: IEthAddressApi<TAddressBalance, TAddressInfo>,
		private readonly ethContractApi: IEthContractApi,
		private readonly ethNotifyApi: IEthNotifyApi,
		private readonly rawTransactionApi: IEthRawTransactionApi<TRawTransaction>,
		private readonly ethTransactions: IEthTransactionsApi<
			TTransactionByAddresses, TTransactionsIntersection,
			TFullTransaction, TTransactionsInterAddresses,
			TTransactionReceipt
		>,
		private readonly ethBlock: IEthBlockApi,
		private readonly factoryDto: IBaseEthFactoryDto<
			TNetworkInfo, TEstimateGasResponse,
			TAddressBalance, TAddressInfo,
			TRawTransaction,
			TTransactionByAddresses, TTransactionsIntersection,
			TFullTransaction, TTransactionsInterAddresses,
			TTransactionReceipt
		>,
	) {}

	/**
	 * Set config to eth api.
	 * @method configure
	 * @param {IServerConfig} config
	 * @return {void}
	 */
	configure(config: IServerConfig) {
		this.mainInfo.configure(config);
		this.ethTokenInfo.configure(config);
		this.ethAddressInfo.configure(config);
		this.ethContractApi.configure(config);
		this.ethNotifyApi.configure(config);
		this.rawTransactionApi.configure(config);
		this.ethTransactions.configure(config);
		this.ethBlock.configure(config);
	}

	/**
	 * Get network full information.
	 * @method getNetworkInfo
	 * @return {Promise<TNetworkInfo>}
	 */
	@TryCatch
	async getNetworkInfo(): Promise<TNetworkInfo> {
		return this.factoryDto.getNetworkInfo(await this.mainInfo.getNetworkInfo());
	}

	/**
	 * Executes a message call or transaction and returns the amount of the gas used
	 * @method estimateGas
	 * @param {TEstimateGasRequest} transaction
	 * @return {Promise<TEstimateGasResponse>}
	 */
	@TryCatch
	async estimateGas(transaction: TEstimateGasRequest): Promise<TEstimateGasResponse> {
		return this.factoryDto.getEstimateGasResponse(await this.mainInfo.estimateGas(transaction));
	}

	/**
	 * Get eth token information by token address.
	 * @method getTokenInfoByTokenAddress
	 * @param {string} address
	 * @return {Promise<EthTokenInfo>}
	 */
	@TryCatch
	async getTokenInfoByTokenAddress(address: string) {
		return this.ethTokenInfo.getTokenInfoByTokenAddress(address);
	}

	/**
	 * Get eth address balances.
	 * @method getAddressesBalances
	 * @param {string[]} addresses
	 * @return {Promise<TAddressBalance[]>}
	 */
	@TryCatch
	async getAddressesBalances(addresses: string[]) {
		const balances = await this.ethAddressInfo.getAddressesBalances(addresses);
		return balances.map((data) => this.factoryDto.getAddressBalance(data));
	}

	/**
	 * Get addresses infos.
	 * @method getAddressesInfos
	 * @param {string[]} addresses
	 * @return {Promise<TAddressInfo[]>}
	 */
	@TryCatch
	async getAddressesInfos(addresses: string[]) {
		const infos = await this.ethAddressInfo.getAddressesInfos(addresses);
		return infos.map((data) => this.factoryDto.getAddressInfo(data));
	}

	/**
	 * Method to get contract information.
	 * method getContractInfo
	 * @param {string} address
	 * @return {Promise<EthContractInfo>}
	 */
	@TryCatch
	getContractInfo(address: string) {
		return this.ethContractApi.getContractInfo(address);
	}

	/**
	 * Method to get balance token by holder and token addresses.
	 * @method getTokenBalanceByAddresses
	 * @param {string} tokenAddress
	 * @param {string[]} holderAddresses
	 * @return {Promise<EthTokenBalance>}
	 */
	@TryCatch
	getTokenBalanceByAddresses(tokenAddress: string, holderAddresses: string[]) {
		return this.ethTokenInfo.getTokenBalanceByAddresses(tokenAddress, holderAddresses);
	}

	/**
	 * Method to get list  tokens balances by holder address.
	 * @method getTokensBalancesByHolderAddress
	 * @param {string[]} holders
	 * @param {TPaginationOptions} options
	 * @return {Promise{EthTokenBalanceByHoldersOut}}
	 */
	@TryCatch
	getTokenBalancesByHolders(holders: string[], options?: TPaginationOptions) {
		return this.ethTokenInfo.getTokenBalancesByHolders(holders, options);
	}

	/**
	 * Method to get block information.
	 * @method getBlock
	 * @param {Number} blockNumber
	 * @return {Promise<EthBlockInfo>}
	 */
	@TryCatch
	getBlock(blockNumber: number) {
		return this.ethBlock.getBlock(blockNumber);
	}

	/**
	 * Method to get all block.
	 * @method getBlock
	 * @param {TPaginationOptions} options
	 * @return {Promise<EthBlockInfo>}
	 */
	@TryCatch
	getBlocks(options: TPaginationOptions) {
		return this.ethBlock.getBlocks(options);
	}

	/*
	 * Method decode raw transaction.
	 * @method decodeRawTransaction
	 * @param {string} tr
	 * @return {TRawTransaction}
	 */
	@TryCatch
	async decodeRawTransaction(tr: string) {
		return this.factoryDto.getRawTransaction(await this.rawTransactionApi.decodeRawTransaction(tr));
	}

	/**
	 * Method to get transactions by addresses.
	 * @method getTransactionsByAddresses
	 * @param {string[]} addresses
	 * @param {boolean} positive?
	 * @param {TPaginationOptions} options?
	 * @return {Promise{TTransactionByAddresses}}
	 */
	@TryCatch
	async getTransactionsByAddresses(addresses: string[], positive?: boolean, options?: TPaginationOptions) {
		const info = await this.ethTransactions.getTransactionsByAddresses(addresses, positive, options);
		return this.factoryDto.getTransactionByAddresses(info);
	}

	/**
	 * Get transactions interception by addresses
	 * @method getTransactionsIntersection
	 * @param {string[]} addresses
	 * @param {TPaginationOptions} options
	 * @return {Promise<TTransactionsIntersection>}
	 */
 	@TryCatch
 	async getTransactionsIntersection(addresses: string[], options: TPaginationOptions) {
 		const info = await this.ethTransactions.getTransactionsIntersection(addresses, options);
 		return this.factoryDto.getTransactionsIntersection(info);
 	}

	/**
	 * Get transactions from one address to another
	 * @method getTransactionsInterAddresses
	 * @param {string} from
	 * @param {string} to
	 * @param {TPaginationOptions} options
	 * @return {Promise<TTransactionsInterAddresses>}
	 */
	@TryCatch
	async getTransactionsInterAddresses(from: string, to: string, options?: TPaginationOptions) {
		const info = await this.ethTransactions.getTransactionsInterAddresses(from, to, options);
		return this.factoryDto.getTransactionsInterAddresses(info);
	}

	/**
	 * Method to get token transfers by token address.
	 * @method getTokenTransfers
	 * @param {EthTokenTransfersRequest} transfersRequest
	 * @param {TPaginationOptions} options?
	 * @return {Promise<EthTokenTransfersResponse>}
	 */
	@TryCatch
	getTokenTransfers(transfersRequest: EthTokenTransfersRequest, options?: TPaginationOptions) {
		return this.ethTokenInfo.getTokenTransfers(transfersRequest, options);
	}

	/**
	 * Method to get token transfers by token address and addresses.
	 * @method getTokenTransfersByAddresses
	 * @param {EthTokenTransfersByAddressesRequest} transfersRequest
	 * @param {TPaginationOptions} options?
	 * @return {Promise<EthTokenTransfersResponse>}
	 */
	@TryCatch
	getTokenTransfersByAddresses(transfersRequest: EthTokenTransfersByAddressesRequest, options?: TPaginationOptions) {
		return this.ethTokenInfo.getTokenTransfersByAddresses(transfersRequest, options);
	}

	/**
	 * Method to call contract.
	 * @method callContract
	 * @param {TEthContractCall} data
	 * @return {Promise<string>}
	 */
	@TryCatch
	callContract(data: TEthContractCall) {
		return this.ethContractApi.callContract(data);
	}

	/**
	 * Method to send raw transaction.
	 * @method sendRawTransaction
	 * @param {string} tr
	 * @return {Promise<string>}
	 */
	@TryCatch
	sendRawTransaction(tr: string) {
		return this.rawTransactionApi.sendRawTransaction(tr);
	}

	/**
	 * Method to search token.
	 * @method searchToken
	 * @param {EthTokenSearchRequest} searchRequest
	 * @param {TPaginationOptions} options?
	 * @return {Promise<EthTokenSearchResponse>}
	 */
	@TryCatch
	searchToken(searchRequest: EthTokenSearchRequest, options?: TPaginationOptions) {
		return this.ethTokenInfo.searchToken(searchRequest, options);
	}

	/**
	 * Method to subscribe push notification by token.
	 * @method subscribePushNotifications
	 * @param {string} token
	 * @param {string[]} addresses
	 * @return {Promise<EthSubscribeToken>}
	 */
	@TryCatch
	subscribePushNotifications(token: string, addresses: string[]) {
		return this.ethNotifyApi.subscribePushNotifications(token, addresses);
	}

	/**
	 * Method to unsubscribe push notification by token.
	 * @method unsubscribePushNotifications
	 * @param {string} token
	 * @param {string[]} addresses
	 * @return {Promise<EthSubscribeToken>}
	 */
	@TryCatch
	unsubscribePushNotifications(token: string, addresses: string[]) {
		return this.ethNotifyApi.unsubscribePushNotifications(token, addresses);
	}

	/**
	 * Get full transaction info by hash.
	 * @method getFullTransactionInfo
	 * @param {string} hash
	 * @return {Promise<TFullTransaction>}
	 */
	@TryCatch
	async getFullTransactionInfo(hash: string) {
		const info = await this.ethTransactions.getFullTransactionInfo(hash);
		return this.factoryDto.getFullTransaction(info);
	}

	/**
	 * Get transaction receipt by hash.
	 * @method getTransactionReceipt
	 * @param {string} hash
	 * @return {Promise<TTransactionReceipt>}
	 */
	@TryCatch
	async getTransactionReceipt(hash: string) {
		const info = await this.ethTransactions.getTransactionReceipt(hash);
		return this.factoryDto.getTransactionReceipt(info);
	}

	/**
	 * Method to get contract logs.
	 * @method getContractLogs
	 * @param {TContractLogsRequest} data
	 * @return {Promise<EthContractLog[]>}
	 */
	@TryCatch
	getContractLogs(data: TContractLogsRequest) {
		return this.ethContractApi.getContractLogs(data);
	}
}

@injectable()
export class EthApiClient extends BaseEthApiClient<
	EthNetworkInfo, EstimateGasResponse,
	EthAddressBalance, EthAddressInfo,
	EthRawTransaction,
	EthTransactionByAddresses, EthTransactionsIntersection,
	FullEthTransaction, EthTransactionsInterAddresses,
	EthTransactionReceipt
> {

	constructor(
		@inject(TYPES_DI.IEthMainInfoApi) mainInfo: IEthMainInfoApi<EthNetworkInfo, EstimateGasResponse>,
		@inject(TYPES_DI.IEthTokenApi) tokenInfo: IEthTokenApi,
		@inject(TYPES_DI.IEthAddressApi) addressInfo: IEthAddressApi<EthAddressBalance, EthAddressInfo>,
		@inject(TYPES_DI.IEthContractApi) contractApi: IEthContractApi,
		@inject(TYPES_DI.IEthNotifyApi) notifyApi: IEthNotifyApi,
		@inject(TYPES_DI.IEthRawTransactionApi) rawTransactionApi: IEthRawTransactionApi<EthRawTransaction>,
		@inject(TYPES_DI.IEthTransactionsApi) transactions: IEthTransactionsApi<
			EthTransactionByAddresses, EthTransactionsIntersection,
			FullEthTransaction, EthTransactionsInterAddresses,
			EthTransactionReceipt
		>,
		@inject(TYPES_DI.IEthBlockApi)  block: IEthBlockApi,
		@inject(TYPES_DI.IEthApiFactoryDto) factory: IEthFactoryDto,
	) {
		super(mainInfo, tokenInfo, addressInfo, contractApi, notifyApi, rawTransactionApi,
			transactions, block, factory);
	}
}
