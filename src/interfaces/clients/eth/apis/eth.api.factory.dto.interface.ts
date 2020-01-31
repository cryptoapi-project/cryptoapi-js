import { EthAddressBalance } from '@src/dtos/eth/eth.address.balance';
import { EthAddressInfo } from '@src/dtos/eth/eth.address.info';
import { EthContract, EthContractLog } from '@src/dtos/eth/eth.contract.dto';
import { EstimateGasResponse } from '@src/dtos/eth/eth.estimate.gas.dto';
import { EthNetworkInfo } from '@src/dtos/eth/eth.network.info';

export interface IBaseEthFactoryDto<
	TNetworkInfo, TEstimateGasResponse,
	TAddressBalance, TAddressInfo,
	TContract, TContractLog,
> {
	getNetworkInfo(data: any): TNetworkInfo;
	getEstimateGasResponse(data: any): TEstimateGasResponse;

	getAddressBalance(data: any): TAddressBalance;
	getAddressInfo(data: any): TAddressInfo;

	getContract(data: any): TContract;
	getContractLog(data: any): TContractLog;

}

export interface IEthApiFactoryDto extends IBaseEthFactoryDto<
	EthNetworkInfo, EstimateGasResponse,
	EthAddressBalance, EthAddressInfo,
	EthContract, EthContractLog
> {}
