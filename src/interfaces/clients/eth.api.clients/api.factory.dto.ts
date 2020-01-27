import { IMainInfoApiFactoryDto } from './sub.api.factory.dto/main.info.factory.dto.interface';

export interface IApiFactoryDto<NetworkInfo, EstimateGasResponse>
	extends IMainInfoApiFactoryDto<NetworkInfo, EstimateGasResponse> {
}
