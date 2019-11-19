export interface IEthNotifyApi {
	subscribeToken(): Promise<any>;
	unsubscribeToken(): Promise<any>;
}
