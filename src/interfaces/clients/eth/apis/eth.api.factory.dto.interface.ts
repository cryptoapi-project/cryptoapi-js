import { EthAddressBalance } from '../../../../dtos/eth/eth.address.balance';
import { EthAddressInfo } from '../../../../dtos/eth/eth.address.info';
import { EstimateGasResponse } from '../../../../dtos/eth/eth.estimate.gas';
import { EthNetworkInfo } from '../../../../dtos/eth/eth.network.info';
import { EthRawTransaction } from '../../../../dtos/eth/eth.raw.transaction';

export interface IBaseEthFactoryDto<
	TNetworkInfo, TEstimateGasResponse,
	TAddressBalance, TAddressInfo,
	TRawTransaction
> {
	getNetworkInfo(data: any): TNetworkInfo;
	getEstimateGasResponse(data: any): TEstimateGasResponse;

	getAddressBalance(data: any): TAddressBalance;
	getAddressInfo(data: any): TAddressInfo;

	getRawTransaction(data: any): TRawTransaction;
}

export interface IEthFactoryDto extends IBaseEthFactoryDto<
	EthNetworkInfo, EstimateGasResponse,
	EthAddressBalance, EthAddressInfo,
	EthRawTransaction
> {}
