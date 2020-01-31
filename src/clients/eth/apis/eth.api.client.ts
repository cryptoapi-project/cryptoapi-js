import { inject, injectable } from 'inversify';

import { TYPES_DI } from '@src/constants/inversify.constants';
import { EthAddressBalance } from '@src/dtos/eth/eth.address.balance';
import { EthAddressInfo } from '@src/dtos/eth/eth.address.info';
import { EthContract, EthContractLog } from '@src/dtos/eth/eth.contract';
import { EstimateGasResponse } from '@src/dtos/eth/eth.estimate.gas';
import { EthNetworkInfo } from '@src/dtos/eth/eth.network.info';
import { EthRawTransaction } from '@src/dtos/eth/eth.raw.transaction';
import { EthTokenSearchRequest } from '@src/dtos/eth/eth.token.search';
import { EthTokenTransfersByAddressesRequest, EthTokenTransfersRequest } from '@src/dtos/eth/eth.transfer.dto';
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
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { TryCatch } from '@src/providers/decorators/try.catch';
import { TContractCall } from '@src/types/eth/call.contract.type';
import { TEstimateGasRequest } from '@src/types/eth/estimate.gas.request.type';
import { TContractLogsRequest } from '@src/types/eth/eth.contract.logs.request';
import { TPaginationOptions } from '@src/types/paginations.options.type';

@injectable()
export class BaseEthApiClient<
	TNetworkInfo, TEstimateGasResponse,
	TAddressBalance, TAddressInfo,
	TContract, TContractLog,
	TRawTransaction
> implements IBaseEthApiClient<
	TNetworkInfo, TEstimateGasResponse,
	TAddressBalance, TAddressInfo,
	TContract, TContractLog,
	TRawTransaction
> {
	config: IServerConfig|null = null;
	constructor(
		private readonly mainInfo: IEthMainInfoApi<TNetworkInfo, TEstimateGasResponse>,
		private readonly ethTokenInfo: IEthTokenApi,
		private readonly ethAddressInfo: IEthAddressApi<TAddressBalance, TAddressInfo>,
		private readonly ethContractApi: IEthContractApi<TContract, TContractLog>,
		private readonly ethNotifyApi: IEthNotifyApi,
		private readonly rawTransactionApi: IEthRawTransactionApi<TRawTransaction>,
		private readonly ethTransactions: IEthTransactionsApi,
		private readonly ethBlock: IEthBlockApi,
		private readonly factoryDto: IBaseEthFactoryDto<
			TNetworkInfo, TEstimateGasResponse,
			TAddressBalance, TAddressInfo,
			TContract, TContractLog,
			TRawTransaction
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
	 * @return {Promise{EthTransactionByAddresses}}
	 */
	@TryCatch
	getTransactionsByAddresses(addresses: string[], positive?: boolean, options?: TPaginationOptions) {
		return this.ethTransactions.getTransactionsByAddresses(addresses, positive, options);
	}

	/**
	 * Get transactions interception by addresses
	 * @method getTransactionsIntersection
	 * @param {string[]} addresses
	 * @param {TPaginationOptions} options
	 * @return {Promise<EthTransactionsIntersection>}
	 */
 	@TryCatch
 	getTransactionsIntersection(addresses: string[], options: TPaginationOptions) {
 		return this.ethTransactions.getTransactionsIntersection(addresses, options);
 	}

	/**
	 * Get transactions from one address to another
	 * @method getTransactionsInterAddresses
	 * @param {string} from
	 * @param {string} to
	 * @param {TPaginationOptions} options
	 * @return {Promise<EthTransactionsInterAddresses>}
	 */
	@TryCatch
	getTransactionsInterAddresses(from: string, to: string, options?: TPaginationOptions) {
		return this.ethTransactions.getTransactionsInterAddresses(from, to, options);

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
	 * @return {Promise<FullEthTransaction>}
	 */
	@TryCatch
	getFullTransactionInfo(hash: string) {
		return this.ethTransactions.getFullTransactionInfo(hash);
	}

	/**
	 * Get transaction receipt by hash.
	 * @method getTransactionReceipt
	 * @param {string} hash
	 * @return {Promise<EthTransactionReceipt>}
	 */
	@TryCatch
	getTransactionReceipt(hash: string) {
		return this.ethTransactions.getTransactionReceipt(hash);
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
	EthContract, EthContractLog,
	EthRawTransaction
> {
	constructor(
		@inject(TYPES_DI.IEthMainInfoApi) mainInfo: IEthMainInfoApi<EthNetworkInfo, EstimateGasResponse>,
		@inject(TYPES_DI.IEthTokenApi) tokenInfo: IEthTokenApi,
		@inject(TYPES_DI.IEthAddressApi) addressInfo: IEthAddressApi<EthAddressBalance, EthAddressInfo>,
		@inject(TYPES_DI.IEthContractApi) contractApi: IEthContractApi<EthContract, EthContractLog>,
		@inject(TYPES_DI.IEthNotifyApi) notifyApi: IEthNotifyApi,
		@inject(TYPES_DI.IEthRawTransactionApi) rawTransactionApi: IEthRawTransactionApi<EthRawTransaction>,
		@inject(TYPES_DI.IEthTransactionsApi) transactions: IEthTransactionsApi,
		@inject(TYPES_DI.IEthBlockApi)  block: IEthBlockApi,
		@inject(TYPES_DI.IEthApiFactoryDto) factory: IEthApiFactoryDto,
	) {
		super(mainInfo, tokenInfo, addressInfo, contractApi, notifyApi, rawTransactionApi,
			transactions, block, factory);
	}
}
