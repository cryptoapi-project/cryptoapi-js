const TYPES_DI = {
	ICrypto: Symbol.for('ICrypto'),

	IApiClient: Symbol.for('IApiClient'),
	IEventsClient: Symbol.for('IEventsClient'),

	ITestnetApiClient: Symbol.for('ITestnetApiClient'),
	ITestnetEventsClient: Symbol.for('ITestnetEventsClient'),

	IEthApiFactoryDto: Symbol.for('IEthApiFactoryDto'),
	IEthApiClient: Symbol.for('IEthApiClient'),
	IEthTestnetApiClient: Symbol.for('IEthTestnetApiClient'),
	IEthApi: Symbol.for('IEthApi'),

	IKlayApiFactoryDto: Symbol.for('IKlayApiFactoryDto'),
	IKlayApiClient: Symbol.for('IKlayApiClient'),
	IKlayTestnetApiClient: Symbol.for('IKlayTestnetApiClient'),
	IKlayApi: Symbol.for('IKlayApi'),

	IUtxoApiClient: Symbol.for('IUtxoApiClient'),
	IUtxoApi: Symbol.for('IUtxoApi'),

	IEthEventsClient: Symbol.for('IEthEventsClient'),
	IEthTestnetEventsClient: Symbol.for('IEthTestnetEventsClient'),
	IEthEvents: Symbol.for('IEthEvents'),

	IKlayEventsClient: Symbol.for('IKlayEventsClient'),
	IKlayTestnetEventsClient: Symbol.for('IKlayTestnetEventsClient'),
	IKlayEvents: Symbol.for('IKlayEvents'),

	IUtxoEventsClient: Symbol.for('IUtxoEventsClient'),
	IUtxoEvents: Symbol.for('IUtxoEvents'),

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
