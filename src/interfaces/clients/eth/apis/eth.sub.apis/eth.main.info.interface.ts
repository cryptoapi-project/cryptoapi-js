import { IConfigurable } from '@src/interfaces/configs/configurable.interface';
import { IServerConfig } from '@src/interfaces/configs/crypto.config.interface';
import { TEstimateGasRequest } from '@src/types/eth/estimate.gas.request.type';

export interface IEthMainInfoApi<TNetworkInfo, TEstimateGasResponse> extends IConfigurable<IServerConfig> {
	getNetworkInfo(): Promise<TNetworkInfo>;
	estimateGas(tr: TEstimateGasRequest): Promise<TEstimateGasResponse>;
}
