import { IMainInfoApiFactoryDTO } from './sub.api.factories/main.info.factory.dto';

export interface IApiFactory<
	NetworkInfo, EstimateGasResponse,
> extends IMainInfoApiFactoryDTO<NetworkInfo, EstimateGasResponse> {}
