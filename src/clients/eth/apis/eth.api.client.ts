import { inject, injectable } from 'inversify';

import { TYPES_DI } from '@src/constants/inversify.constants';
import { ServerConfig } from '@src/dtos/crypto.config';
import { EthAddressBalance } from '@src/dtos/eth/eth.address.balance';
import { EthAddressInfo } from '@src/dtos/eth/eth.address.info';
import { EthBlockInfo, EthBlocksResponse } from '@src/dtos/eth/eth.block.dtos';
import { EthContract, EthContractLog } from '@src/dtos/eth/eth.contract';
import { EstimateGasResponse } from '@src/dtos/eth/eth.estimate.gas';
import { EthNetworkInfo } from '@src/dtos/eth/eth.network.info';
import { EthRawTransaction } from '@src/dtos/eth/eth.raw.transaction';
import { EthTokenInfo } from '@src/dtos/eth/eth.token.info';
import { EthTokenSearchRequest } from '@src/dtos/eth/eth.token.search';
import { EthTokenSearchResponse } from '@src/dtos/eth/eth.token.search';
import { EthTokenBalanceByHoldersOut } from '@src/dtos/eth/eth.tokens.by.holders';
import {
	EthExternalTransactions,
	EthFullTransaction,
	EthFullTransactionReceipt,
	EthTransactionsBetweenAddresses,
	EthTransfers,
} from '@src/dtos/eth/eth.transaction';
import { EthTokenTransfersResponse } from '@src/dtos/eth/eth.transfer.dto';
import { IBaseEthApiClient } from '@src/interfaces/clients/eth/apis/eth.api.client.interface';
import { IBaseEthFactoryDto, IEthApiFactoryDto } from '@src/interfaces/clients/eth/apis/eth.api.factory.dto.interface';
import { IEthAddressApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.address.api.interface';
import { IEthBlockApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.block.interface';
import { IEthContractApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.contract.api.interface';
import { IEthMainInfoApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.main.info.interface';
import { IEthNotifyApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.notify.api.interface';
import { IEthRawTransactionApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.raw.transaction.interface';
import { IEthTokenApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.token.api.interface';
import { IEthTransactionsApi } from '@src/interfaces/clients/eth/apis/eth.sub.apis/eth.transactions.interface';
import { IEthTestnetApiClient } from '@src/interfaces/clients/eth/apis/eth.testnet.api.client.interface';
import { IEthServerConfig, IServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { TryCatch } from '@src/providers/decorators/try.catch';
import { TContractCall } from '@src/types/eth/call.contract.type';
import { TContractLogsRequest } from '@src/types/eth/contract.logs.request.type';
import { TEstimateGasRequest } from '@src/types/eth/estimate.gas.request.type';
import { TExternalTransactionsRequest} from '@src/types/eth/external.transactions.request.type';
import { TTokenBalanceRequest } from '@src/types/eth/token.balance.request.type';
import { TTokenTransfersByAddressesRequest, TTokenTransfersRequest } from '@src/types/eth/token.transfer.request.type';
import { TTransfersRequest } from '@src/types/eth/transfers.request.type';
import { TTrxsBetweenAddressesRequest } from '@src/types/eth/trxs.between.addresses.request.type';
import { TPaginationOptions } from '@src/types/paginations.options.type';

@injectable()
export class BaseEthApiClient<
	TNetworkInfo, TEstimateGasResponse,
	TAddressBalance, TAddressInfo,
	TTokenInfo, TTokenBalanceByHoldersOut, TTokenSearchResponse, TTokenTransfersResponse,
	TBlockInfo, TBlocksResponse,
	TContract, TContractLog,
	TRawTransaction,
	TTransfers, TExternalTransactions,
	TFullTransaction, TTransactionsBetweenAddresses,
	TTransactionReceipt
	> implements IBaseEthApiClient<
	TNetworkInfo, TEstimateGasResponse,
	TAddressBalance, TAddressInfo,
	TTokenInfo, TTokenBalanceByHoldersOut, TTokenSearchResponse, TTokenTransfersResponse,
	TBlockInfo, TBlocksResponse,
	TContract, TContractLog,
	TRawTransaction,
	TTransfers, TExternalTransactions,
	TFullTransaction, TTransactionsBetweenAddresses,
	TTransactionReceipt
	> {
	config: IServerConfig | null = null;
	constructor(
		private readonly mainInfo: IEthMainInfoApi<TNetworkInfo, TEstimateGasResponse>,
		private readonly tokenInfo: IEthTokenApi<TTokenInfo, TTokenBalanceByHoldersOut, TTokenSearchResponse, TTokenTransfersResponse>,
		private readonly ethAddressInfo: IEthAddressApi<TAddressBalance, TAddressInfo>,
		private readonly ethContractApi: IEthContractApi<TContract, TContractLog>,
		private readonly ethNotifyApi: IEthNotifyApi,
		private readonly rawTransactionApi: IEthRawTransactionApi<TRawTransaction>,
		private readonly block: IEthBlockApi<TBlockInfo, TBlocksResponse>,
		private readonly ethTransactions: IEthTransactionsApi<
			TTransfers, TExternalTransactions,
			TFullTransaction, TTransactionsBetweenAddresses,
			TTransactionReceipt
		>,
		private readonly factoryDto: IBaseEthFactoryDto<
			TNetworkInfo, TEstimateGasResponse,
			TAddressBalance, TAddressInfo,
			TTokenInfo, TTokenBalanceByHoldersOut, TTokenSearchResponse, TTokenTransfersResponse,
			TBlockInfo, TBlocksResponse,
			TContract, TContractLog,
			TRawTransaction,
			TTransfers, TExternalTransactions,
			TFullTransaction, TTransactionsBetweenAddresses,
			TTransactionReceipt
		>,
	) { }

	/**
	 * Set config to eth api.
	 * @method configure
	 * @param {IServerConfig} config
	 * @return {void}
	 */
	configure(config: IServerConfig) {
		this.mainInfo.configure(config);
		this.tokenInfo.configure(config);
		this.ethAddressInfo.configure(config);
		this.ethContractApi.configure(config);
		this.ethNotifyApi.configure(config);
		this.rawTransactionApi.configure(config);
		this.ethTransactions.configure(config);
		this.block.configure(config);
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
	 * Get token information by token address.
	 * @method getToken
	 * @param {string} address
	 * @return {Promise<TTokenInfo>}
	 */
	@TryCatch
	async getToken(address: string) {
		const info = await this.tokenInfo.getToken(address);
		return this.factoryDto.getTokenInfo(info);
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
	 * @return {Promise<TContract>}
	 */
	@TryCatch
	async getContractInfo(address: string) {
		const info = await this.ethContractApi.getContractInfo(address);
		return this.factoryDto.getContract(info);
	}

	/**
	 * Method to get balance token by holder and token addresses.
	 * @method getTokenBalanceByAddresses
	 * @param {TTokenBalanceRequest} tokenBalanceRequest
	 * @return {Promise<TTokenBalanceByHoldersOut>}
	 */
	@TryCatch
	async getTokenBalanceByAddresses(tokenBalanceRequest: TTokenBalanceRequest) {
		const info = await this.tokenInfo.getTokenBalanceByAddresses(tokenBalanceRequest);
		return this.factoryDto.getTokenBalanceByAddresses(info);
	}

	/**
	 * Method to get list  tokens balances by holder address.
	 * @method getTokensBalancesByHolderAddress
	 * @param {string[]} holders
	 * @param {TPaginationOptions} options
	 * @return {Promise{TTokenBalanceByHoldersOut}}
	 */
	@TryCatch
	async getTokenBalancesByHolders(holders: string[], options?: TPaginationOptions) {
		const info = await this.tokenInfo.getTokenBalancesByHolders(holders, options);
		return this.factoryDto.getTokenBalancesByHolders(info);
	}

	/**
	 * Method to get block information.
	 * @method getBlock
	 * @param {Number} blockNumber
	 * @return {Promise<TBlockInfo>}
	 */
	@TryCatch
	async getBlock(blockNumberOrHash: number | string) {
		return this.factoryDto.getBlock(await this.block.getBlock(blockNumberOrHash));
	}

	/**
	 * Method to get all block.
	 * @method getBlock
	 * @param {TPaginationOptions} options
	 * @return {Promise<TBlockInfo>}
	 */
	@TryCatch
	async getBlocks(options: TPaginationOptions) {
		return this.factoryDto.getBlocksResponse(await this.block.getBlocks(options));
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
	 * Method to get transactions history.
	 * @method getTransfers
	 * @param {TTransfersRequest} data
	 * @param {TPaginationOptions} options?
	 * @return {Promise{TTransfers}}
	 */
	@TryCatch
	async getTransfers(data: TTransfersRequest, options?: TPaginationOptions) {
		const info = await this.ethTransactions.getTransfers(data, options);
		return this.factoryDto.getTransfers(info);
	}

	/**
	 * Get transactions interception by addresses
	 * @method getExternalTransactions
	 * @param {TExternalTransactionsRequest} data
	 * @param {TPaginationOptions} options
	 * @return {Promise<TExternalTransactions>}
	 */
	@TryCatch
	async getExternalTransactions(data: TExternalTransactionsRequest, options: TPaginationOptions) {
		const info = await this.ethTransactions.getExternalTransactions(data, options);
		return this.factoryDto.getExternalTransactions(info);
	}

	/**
	 * Get transactions from one address to another
	 * @method getTransactionsInterAddresses
	 * @param {TTrxsBetweenAddressesRequest} data
	 * @param {TPaginationOptions} options
	 * @return {Promise<TTransactionsBetweenAddresses>}
	 */
	@TryCatch
	async getTransactions(data: TTrxsBetweenAddressesRequest, options?: TPaginationOptions) {
		const info = await this.ethTransactions.getTransactions(data, options);
		return this.factoryDto.getTransactions(info);
	}

	/**
	 * Method to get token transfers by token address.
	 * @method getTokenTransfers
	 * @param {TTokenTransfersRequest} transfersRequest
	 * @param {TPaginationOptions} options?
	 * @return {Promise<TTokenTransfersResponse>}
	 */
	@TryCatch
	async getTokenTransfers(transfersRequest: TTokenTransfersRequest, options?: TPaginationOptions) {
		const info = await this.tokenInfo.getTokenTransfers(transfersRequest, options);
		return this.factoryDto.getTokenTransfers(info);
	}

	/**
	 * Method to get token transfers by token address and addresses.
	 * @method getTokenTransfersByAddresses
	 * @param {TTokenTransfersByAddressesRequest} transfersRequest
	 * @param {TPaginationOptions} options?
	 * @return {Promise<TTokenTransfersResponse>}
	 */
	@TryCatch
	async getTokenTransfersByAddresses(transfersRequest: TTokenTransfersByAddressesRequest, options?: TPaginationOptions) {
		const info = await this.tokenInfo.getTokenTransfersByAddresses(transfersRequest, options);
		return this.factoryDto.getTokenTransfersByAddresses(info);
	}

	/**
	 * Method to call contract.
	 * @method callContract
	 * @param {TContractCall} data
	 * @return {Promise<string>}
	 */
	@TryCatch
	callContract(data: TContractCall) {
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
	 * @return {Promise<TTokenSearchResponse>}
	 */
	@TryCatch
	async searchToken(searchRequest: EthTokenSearchRequest, options?: TPaginationOptions) {
		const info = await this.tokenInfo.searchToken(searchRequest, options);
		return this.factoryDto.searchToken(info);
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
	 * @method getFullTransaction
	 * @param {string} hash
	 * @return {Promise<TFullTransaction>}
	 */
	@TryCatch
	async getFullTransaction(hash: string) {
		const info = await this.ethTransactions.getFullTransaction(hash);
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
	EthTokenInfo, EthTokenBalanceByHoldersOut, EthTokenSearchResponse, EthTokenTransfersResponse,
	EthBlockInfo, EthBlocksResponse,
	EthContract, EthContractLog,
	EthRawTransaction,
	EthTransfers, EthExternalTransactions,
	EthFullTransaction, EthTransactionsBetweenAddresses,
	EthFullTransactionReceipt
> {
	constructor(
		@inject(TYPES_DI.IEthMainInfoApi) mainInfo: IEthMainInfoApi<EthNetworkInfo, EstimateGasResponse>,
		@inject(TYPES_DI.IEthTokenApi) tokenInfo: IEthTokenApi<
			EthTokenInfo, EthTokenBalanceByHoldersOut, EthTokenSearchResponse, EthTokenTransfersResponse
		>,
		@inject(TYPES_DI.IEthAddressApi) addressInfo: IEthAddressApi<EthAddressBalance, EthAddressInfo>,
		@inject(TYPES_DI.IEthContractApi) contractApi: IEthContractApi<EthContract, EthContractLog>,
		@inject(TYPES_DI.IEthNotifyApi) notifyApi: IEthNotifyApi,
		@inject(TYPES_DI.IEthRawTransactionApi) rawTransactionApi: IEthRawTransactionApi<EthRawTransaction>,
		@inject(TYPES_DI.IEthBlockApi) block: IEthBlockApi<EthBlockInfo, EthBlocksResponse>,
		@inject(TYPES_DI.IEthTransactionsApi) transactions: IEthTransactionsApi<
			EthTransfers, EthExternalTransactions,
			EthFullTransaction, EthTransactionsBetweenAddresses,
			EthFullTransactionReceipt
		>,
		@inject(TYPES_DI.IEthApiFactoryDto) factory: IEthApiFactoryDto,
	) {
		super(
			mainInfo,
			tokenInfo,
			addressInfo,
			contractApi,
			notifyApi,
			rawTransactionApi,
			block,
			transactions,
			factory,
		);
	}
}

@injectable()
export class EthApi extends EthApiClient {
	testnet: IEthTestnetApiClient;

	constructor(
		@inject(TYPES_DI.IEthMainInfoApi) mainInfo: IEthMainInfoApi<EthNetworkInfo, EstimateGasResponse>,
		@inject(TYPES_DI.IEthTokenApi) tokenInfo: IEthTokenApi<
			EthTokenInfo, EthTokenBalanceByHoldersOut, EthTokenSearchResponse, EthTokenTransfersResponse
		>,
		@inject(TYPES_DI.IEthAddressApi) addressInfo: IEthAddressApi<EthAddressBalance, EthAddressInfo>,
		@inject(TYPES_DI.IEthContractApi) contractApi: IEthContractApi<EthContract, EthContractLog>,
		@inject(TYPES_DI.IEthNotifyApi) notifyApi: IEthNotifyApi,
		@inject(TYPES_DI.IEthRawTransactionApi) rawTransactionApi: IEthRawTransactionApi<EthRawTransaction>,
		@inject(TYPES_DI.IEthBlockApi) block: IEthBlockApi<EthBlockInfo, EthBlocksResponse>,
		@inject(TYPES_DI.IEthTransactionsApi) transactions: IEthTransactionsApi<
			EthTransfers, EthExternalTransactions,
			EthFullTransaction, EthTransactionsBetweenAddresses,
			EthFullTransactionReceipt
		>,
		@inject(TYPES_DI.IEthApiFactoryDto) factory: IEthApiFactoryDto,
		@inject(TYPES_DI.IEthTestnetApiClient) testnet: IEthTestnetApiClient,

	) {
		super(
			mainInfo,
			tokenInfo,
			addressInfo,
			contractApi,
			notifyApi,
			rawTransactionApi,
			block,
			transactions,
			factory,
		);

		this.testnet = testnet;
	}

	/**
	 * Set config to eth api.
	 * @method configure
	 * @param {IEthServerConfig} config
	 * @return {void}
	 */
	configure(config: IEthServerConfig) {
		super.configure(new ServerConfig(config));
		this.testnet.configure(config);
	}
}
