import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../constants/inversify.constants';

import { EstimateGasRequest, EstimateGasResponse } from '../../dtos/eth/eth.estimate.gas.dto';
import { PaginationOptions } from '../../dtos/paginations.options';

import { IEthApiClient } from '../../interfaces/eth.apis/eth.api.client.interface';
import { IEthMainInfoApi } from '../../interfaces/eth.apis/eth.sub.apis/eth.main.info.interface';
import { IEthBlockApi } from '../../interfaces/eth.apis/eth.sub.apis/eth.block.interface';
import { IEthTokenApi } from '../../interfaces/eth.apis/eth.sub.apis/eth.token.api.interface';
import { IEthAddressApi } from '../../interfaces/eth.apis/eth.sub.apis/eth.address.api.interface';
import { IEthTransactionsApi } from '../../interfaces/eth.apis/eth.sub.apis/eth.transactions.interface';
import { IServerConfig } from '../../interfaces/configs/crypto.config.interface';
import { IEthContractApi } from '../../interfaces/eth.apis/eth.sub.apis/eth.contract.api.interface';

import { TryCatch } from '../../providers/decorators/try.catch';

@injectable()
export class EthApiClient implements IEthApiClient {
	config: IServerConfig|null = null;

	constructor(
		@inject(TYPES_DI.IEthMainInfoApi) private readonly ethMainInfo: IEthMainInfoApi,
		@inject(TYPES_DI.IEthTokenApi) private readonly ethTokenInfo: IEthTokenApi,
		@inject(TYPES_DI.IEthAddressApi) private readonly ethAddressInfo: IEthAddressApi,
		@inject(TYPES_DI.IEthContractApi) private readonly ethContractApi: IEthContractApi,
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
	 * @param {EstimateGasRequest} transaction
	 * @return {Promise<EstimateGasResponse>}
	 */
	@TryCatch
	estimateGas(transaction: EstimateGasRequest): Promise<EstimateGasResponse> {
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
	 * @param {PaginationOptions} options?
	 * @return {Promise{EthTokensByHolder}}
	 */
	@TryCatch
	getTokensBalancesByHolderAddress(address: string, options?: PaginationOptions) {
		return this.ethTokenInfo.getTokensBalancesByHolderAddress(address, options);
	}

	/**
	 * Method to get transactions by addresses.
	 * @method getTransactionsByAddresses
	 * @param {string[]} addresses
	 * @param {boolean} positive?
	 * @param {PaginationOptions} options?
	 * @return {Promise{EthTransactionByAddresses}}
	 */
	@TryCatch
	getTransactionsByAddresses(addresses: string[], positive?: boolean, options?: PaginationOptions) {
		return this.ethTransactions.getTransactionsByAddresses(addresses, positive, options);
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
}
