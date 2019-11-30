const TYPES_DI = {
	ICrypto: Symbol.for('ICrypto'),

	IApiClient: Symbol.for('IApiClient'),
	IEventsClient: Symbol.for('IEventsClient'),

	IEthApiClient: Symbol.for('IEthApiClient'),
	IEthEventsClient: Symbol.for('IEthEventsClient'),

	IEthAddressApi: Symbol.for('IEthAddressApi'),
	IEthMainInfoApi: Symbol.for('IEthMainInfoApi'),
	IEthNotifyApi: Symbol.for('IEthNotifyApi'),
	IEthContractApi: Symbol.for('IEthContractApi'),
	IEthRawTransactionApi: Symbol.for('IEthRawTransactionApi'),
	IEthBlockApi: Symbol.for('IEthBlockApi'),
	IEthTokenApi: Symbol.for('IEthTokenApi'),
	IEthTransactionsApi: Symbol.for('IEthTransactionsApi'),

	IHttpService: Symbol.for('IHttpService'),
	ICryptoConfig: Symbol.for('ICryptoConfig'),

	IValidateHelper: Symbol.for('IValidateHelper'),
	IUrlHelper: Symbol.for('IUrlHelper'),
};

export { TYPES_DI };
