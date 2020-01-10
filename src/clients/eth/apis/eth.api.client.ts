import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';

import { TPaginationOptions } from '../../../types/paginations.options.type';
import { TEthContractCall } from '../../../types/eth/call.contract.type';
import { TEstimateGasRequest } from '../../../types/eth/estimate.gas.request.type';
import { TContractLogsRequest } from '../../../types/eth/eth.contract.logs.request';
import { IEthContractApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.contract.api.interface';

import { EstimateGasResponse } from '../../../dtos/eth/eth.estimate.gas.dto';

import { IEthApiClient } from '../../../interfaces/clients/eth/apis/eth.api.client.interface';
import { IEthMainInfoApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.main.info.interface';
import { IEthBlockApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.block.interface';
import { IEthTokenApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.token.api.interface';
import { IEthAddressApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.address.api.interface';
import { IEthTransactionsApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.transactions.interface';
import { IServerConfig } from '../../../interfaces/configs/crypto.config.interface';
import { IEthNotifyApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.notify.api.interface';
import { IEthRawTransactionApi } from '../../../interfaces/clients/eth/apis/eth.sub.apis/eth.raw.transaction.interface';

import { TryCatch } from '../../../providers/decorators/try.catch';
import { EthTokenSearchRequest } from '../../../dtos/eth/eth.token.search';

@injectable()
export class EthApiClient implements IEthApiClient {

	config: IServerConfig|null = null;

	constructor(
		@inject(TYPES_DI.IEthMainInfoApi) private readonly ethMainInfo: IEthMainInfoApi,
		@inject(TYPES_DI.IEthTokenApi) private readonly ethTokenInfo: IEthTokenApi,
		@inject(TYPES_DI.IEthAddressApi) private readonly ethAddressInfo: IEthAddressApi,
		@inject(TYPES_DI.IEthContractApi) private readonly ethContractApi: IEthContractApi,
		@inject(TYPES_DI.IEthNotifyApi) private readonly ethNotifyApi: IEthNotifyApi,
		@inject(TYPES_DI.IEthRawTransactionApi) private readonly rawTransactionApi: IEthRawTransactionApi,
		@inject(TYPES_DI.IEthRawTransactionApi) private readonly ethRawTransactionApi: IEthRawTransactionApi,
		@inject(TYPES_DI.IEthTransactionsApi) private readonly ethTransactions: IEthTransactionsApi,
		@inject(TYPES_DI.IEthBlockApi) private readonly ethBlock: IEthBlockApi,
	) {}

	/**
	 * Set config to eth api.
	 * @method configure
	 * @param {IServerConfig} config
	 * @return {void}
	 */
	configure(config: IServerConfig) {
		this.ethMainInfo.configure(config);
		this.ethTokenInfo.configure(config);
		this.ethAddressInfo.configure(config);
		this.ethContractApi.configure(config);
		this.ethNotifyApi.configure(config);
		this.rawTransactionApi.configure(config);
		this.ethRawTransactionApi.configure(config);
		this.ethTransactions.configure(config);
		this.ethBlock.configure(config);
	}

	/**
	 * Get eth network full information.
	 * @method getNetworkInfo
	 * @return {Promise<EthNetworkInfo>}
	 */
	@TryCatch
	async getNetworkInfo() {
		return this.ethMainInfo.getNetworkInfo();
	}

	/**
	 * Executes a message call or transaction and returns the amount of the gas used
	 * @method estimateGas
	 * @param {TEstimateGasRequest} transaction
	 * @return {Promise<EstimateGasResponse>}
	 */
	@TryCatch
	estimateGas(transaction: TEstimateGasRequest): Promise<EstimateGasResponse> {
		return this.ethMainInfo.estimateGas(transaction);
	}

	/**
	 * Get eth token information by token address.
	 * @method getTokenInfoByTokenAddress
	 * @param {string} address
	 * @return {Promise<EthNetworkInfo>}
	 */
	@TryCatch
	async getTokenInfoByTokenAddress(address: string) {
		return this.ethTokenInfo.getTokenInfoByTokenAddress(address);
	}

	/**
	 * Get eth address balances.
	 * @method getAddressesBalances
	 * @param {string[]} addresses
	 * @return {Promise<EthAddressBalance[]>}
	 */
	@TryCatch
	async getAddressesBalances(addresses: string[]) {
		return this.ethAddressInfo.getAddressesBalances(addresses);
	}

	/**
	 * Get eth addresses infos.
	 * @method getAddressesInfos
	 * @param {string[]} addresses
	 * @return {Promise<EthAddressInfo[]>}
	 */
	@TryCatch
	getAddressesInfos(addresses: string[]) {
		return this.ethAddressInfo.getAddressesInfos(addresses);
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
	 * @param {string} holderAddress
	 * @return {Promise<EthTokenBalance>}
	 */
	@TryCatch
	getTokenBalanceByAddresses(tokenAddress: string, holderAddress: string) {
		return this.ethTokenInfo.getTokenBalanceByAddresses(tokenAddress, holderAddress);
	}

	/**
	 * Method to get list  tokens balances by holder address.
	 * @method getTokensBalancesByHolderAddress
	 * @param {string} address
	 * @param {TPaginationOptions} options?
	 * @return {Promise{EthTokensByHolder}}
	 */
	@TryCatch
	getTokensBalancesByHolderAddress(address: string, options?: TPaginationOptions) {
		return this.ethTokenInfo.getTokensBalancesByHolderAddress(address, options);
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

	/*
	 * Method decode raw transaction.
	 * @method decodeRawTransaction
	 * @param {string} tr
	 * @return {EthRawTransaction}
	 */
	@TryCatch
	decodeRawTransaction(tr: string) {
		return this.ethRawTransactionApi.decodeRawTransaction(tr);
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

	/*
	 * Method to get token transfers by token address.
	 * @method getTokenTransfers
	 * @param {string} addressToken
	 * @param {string[]} addresses
	 * @param {TPaginationOptions} options?
	 * @return {Promise<EthTokenTransfersResponse>}
	 */
	@TryCatch
	getTokenTransfers(addressToken: string, addresses: string[], options?: TPaginationOptions) {
		return this.ethTokenInfo.getTokenTransfers(addressToken, addresses, options);
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

	/*
	 * Method to send raw transaction.
	 * @method sendRawTransaction
	 * @param {string} tr
	 * @return {Promise<string>}
	 */
	@TryCatch
	sendRawTransaction(tr: string) {
		return this.rawTransactionApi.sendRawTransaction(tr);
	}

	/*
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
	 * @method subscribeToken
	 * @param {string} token
	 * @param {string[]} addresses
	 * @return {Promise<EthSubscribeToken>}
	 */
	@TryCatch
	subscribeToken(token: string, addresses: string[]) {
		return this.ethNotifyApi.subscribeToken(token, addresses);
	}

	/**
	 * Method to unsubscribe push notification by token.
	 * @method unsubscribeToken
	 * @param {string} token
	 * @param {string[]} addresses
	 * @return {Promise<EthSubscribeToken>}
	 */
	@TryCatch
	unsubscribeToken(token: string, addresses: string[]) {
		return this.ethNotifyApi.unsubscribeToken(token, addresses);
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
