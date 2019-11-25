export interface IServerConfig {
	baseUrl: string;
}

export interface ICryptoOptions {
	eth: IServerConfig;
	timeout: number;
}

export interface ICryptoConfig extends ICryptoOptions {
	token: string;
}
