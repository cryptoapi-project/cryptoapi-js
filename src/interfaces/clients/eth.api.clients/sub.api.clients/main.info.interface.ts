import { IConfigurable, IConfigurableFactory } from '../../../configs/configurable.interface';
import { IServerConfig } from '../../../configs/crypto.config.interface';

import { IMainInfoApiFactoryDto } from '../sub.api.factory.dto/main.info.factory.dto.interface';

export interface IMainInfoApi<
	NetworkInfo,
	EstimateGasRequest,
	EstimateGasResponse,
> extends IConfigurable<IServerConfig>, IConfigurableFactory<
	IMainInfoApiFactoryDto<
		NetworkInfo,
		EstimateGasResponse
	>
> {
	getNetworkInfo(): Promise<NetworkInfo>;
	estimateGas(tr: EstimateGasRequest): Promise<EstimateGasResponse>;
}
