import { EthNetworkInfo } from '../../../dtos/eth/eth.network.info';
import { EstimateGasRequest, EstimateGasResponse } from '../../../dtos/eth/eth.estimate.gas.dto';
import { IConfigurable } from '../../configs/configurable.interface';
import { IServerConfig } from '../../configs/crypto.config.interface';

export interface IEthMainInfoApi extends IConfigurable<IServerConfig> {
	getNetworkInfo(): Promise<EthNetworkInfo>;
	estimateGas(tr: EstimateGasRequest): Promise<EstimateGasResponse>;
}
