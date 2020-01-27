
export interface IMainInfoApiFactoryDto<
	NetworkInfo,
	EstimateGasResponse,
> {
	getNetworkInfo(data: any): NetworkInfo;
	getEstimateGasResponse(data:any): EstimateGasResponse;
}
