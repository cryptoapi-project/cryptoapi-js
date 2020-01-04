import { EthNetworkInfo } from '../../../../../dtos/eth/eth.network.info';
import { EstimateGasResponse } from '../../../../../dtos/eth/eth.estimate.gas.dto';
import { IConfigurable } from '../../../../configs/configurable.interface';
import { IServerConfig } from '../../../../configs/crypto.config.interface';
import { TEstimateGasRequest } from '../../../../../types/estimate.gas.request.type';

export interface IEthMainInfoApi extends IConfigurable<IServerConfig> {
	getNetworkInfo(): Promise<EthNetworkInfo>;
	estimateGas(tr: TEstimateGasRequest): Promise<EstimateGasResponse>;
}
