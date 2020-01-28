const TYPES_DI = {
	ICrypto: Symbol.for('ICrypto'),

	IApiClient: Symbol.for('IApiClient'),
	IEventsClient: Symbol.for('IEventsClient'),

	IEthApiClient: Symbol.for('IEthApiClient'),
	IKlayApiClient: Symbol.for('IKlayApiClient'),
	IEthApiFactoryDto: Symbol.for('IEthApiFactoryDto'),
	IKlayApiFactoryDto: Symbol.for('IKlayApiFactoryDto'),

	IUtxoApiClient: Symbol.for('IUtxoApiClient'),
	IEthEventsClient: Symbol.for('IEthEventsClient'),
	IKlayEventsClient: Symbol.for('IKlayEventsClient'),
	IUtxoEventsClient: Symbol.for('IUtxoEventsClient'),

	IEthAddressApi: Symbol.for('IEthAddressApi'),
	IEthMainInfoApi: Symbol.for('IEthMainInfoApi'),
	IEthNotifyApi: Symbol.for('IEthNotifyApi'),
	IEthContractApi: Symbol.for('IEthContractApi'),
	IEthRawTransactionApi: Symbol.for('IEthRawTransactionApi'),
	IEthBlockApi: Symbol.for('IEthBlockApi'),
	IEthTokenApi: Symbol.for('IEthTokenApi'),
	IEthTransactionsApi: Symbol.for('IEthTransactionsApi'),

	IUtxoMainInfoApi: Symbol.for('IUtxoMainInfoApi'),
	IUtxoBlockApi: Symbol.for('IUtxoBlockApi'),
	IUtxoRawTransactionApi: Symbol.for('IUtxoRawTransactionApi'),
	IUtxoTransactionsApi: Symbol.for('IUtxoTransactionsApi'),
	IUtxoAddressApi: Symbol.for('IUtxoAddressApi'),
	IUtxoOutputsApi: Symbol.for('IUtxoOutputsApi'),

	IIdHelper: Symbol.for('IIdHelper'),
	ISubsHelper: Symbol.for('ISubsHelper'),

	ICoreLibBtc: Symbol.for('ICoreLibBtc'),
	ICoreLibBch: Symbol.for('ICoreLibBch'),

	IHttpService: Symbol.for('IHttpService'),
	ICryptoConfig: Symbol.for('ICryptoConfig'),
	IValidateHelper: Symbol.for('IValidateHelper'),
	IUrlHelper: Symbol.for('IUrlHelper'),
};

export { TYPES_DI };
