import { EthAddressBalance } from '../../../../dtos/eth/eth.address.balance';
import { EthAddressInfo } from '../../../../dtos/eth/eth.address.info';
import { EstimateGasResponse } from '../../../../dtos/eth/eth.estimate.gas.dto';
import { EthNetworkInfo } from '../../../../dtos/eth/eth.network.info';

export interface IBaseEthFactoryDto<
	TNetworkInfo, TEstimateGasResponse,
	TAddressBalance, TAddressInfo,
> {
	getNetworkInfo(data: any): TNetworkInfo;
	getEstimateGasResponse(data: any): TEstimateGasResponse;

	getAddressBalance(data: any): TAddressBalance;
	getAddressInfo(data: any): TAddressInfo;
}

export interface IEthFactoryDto extends IBaseEthFactoryDto<
	EthNetworkInfo, EstimateGasResponse,
	EthAddressBalance, EthAddressInfo
> {}
