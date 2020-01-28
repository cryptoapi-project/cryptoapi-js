import { TEstimateGasRequest } from '../../../../../types/eth/estimate.gas.request.type';
import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';

export interface IEthMainInfoApi<TNetworkInfo, TEstimateGasResponse> extends IConfigurable<IServerConfig> {
	getNetworkInfo(): Promise<TNetworkInfo>;
	estimateGas(tr: TEstimateGasRequest): Promise<TEstimateGasResponse>;
}
