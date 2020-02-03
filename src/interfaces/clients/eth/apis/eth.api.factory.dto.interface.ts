import { EthAddressBalance } from '@src/dtos/eth/eth.address.balance';
import { EthAddressInfo } from '@src/dtos/eth/eth.address.info';
import { EthBlockInfo, EthBlocksResponse } from '@src/dtos/eth/eth.block.dtos';
import { EthContract, EthContractLog } from '@src/dtos/eth/eth.contract';
import { EstimateGasResponse } from '@src/dtos/eth/eth.estimate.gas';
import { EthNetworkInfo } from '@src/dtos/eth/eth.network.info';
import { EthRawTransaction } from '@src/dtos/eth/eth.raw.transaction';

export interface IBaseEthFactoryDto<
	TNetworkInfo, TEstimateGasResponse,
	TAddressBalance, TAddressInfo,
	TBlockInfo, TBlocksResponse,
	TContract, TContractLog,
	TRawTransaction
	> {
	getNetworkInfo(data: any): TNetworkInfo;
	getEstimateGasResponse(data: any): TEstimateGasResponse;

	getAddressBalance(data: any): TAddressBalance;
	getAddressInfo(data: any): TAddressInfo;

	getBlock(data: any): TBlockInfo;
	getBlocksResponse(data: any): TBlocksResponse;

	getContract(data: any): TContract;
	getContractLog(data: any): TContractLog;

	getRawTransaction(data: any): TRawTransaction;
}

export interface IEthApiFactoryDto extends IBaseEthFactoryDto<
	EthNetworkInfo, EstimateGasResponse,
	EthAddressBalance, EthAddressInfo,
	EthBlockInfo, EthBlocksResponse,
	EthContract, EthContractLog,
	EthRawTransaction
	> { }
