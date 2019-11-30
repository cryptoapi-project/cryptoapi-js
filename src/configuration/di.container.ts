import { Container } from 'inversify';

import { TYPES_DI } from '../constants/inversify.constants';

import { ICrypto } from '../interfaces/crypto.interface';
import { IApiClient } from '../interfaces/clients/api.client.interface';
import { IEventsClient } from '../interfaces/clients/events.client.interface';
import { IEthApiClient } from '../interfaces/eth.apis/eth.api.client.interface';
import { IEthEventsClient } from '../interfaces/eth.events/eth.events.client.interface';
import { IEthNotifyApi } from '../interfaces/eth.apis/eth.sub.apis/eth.notify.api.interface';
import { IEthAddressApi } from '../interfaces/eth.apis/eth.sub.apis/eth.address.api.interface';
import { IEthMainInfoApi } from '../interfaces/eth.apis/eth.sub.apis/eth.main.info.interface';
import { IEthContractApi } from '../interfaces/eth.apis/eth.sub.apis/eth.contract.api.interface';
import { IEthRawTransactionApi } from '../interfaces/eth.apis/eth.sub.apis/eth.raw.transaction.interface';
import { IEthBlockApi } from '../interfaces/eth.apis/eth.sub.apis/eth.block.interface';
import { IEthTokenApi } from 'interfaces/eth.apis/eth.sub.apis/eth.token.api.interface';
import { IEthTransactionsApi } from '../interfaces/eth.apis/eth.sub.apis/eth.transactions.interface';

import { IValidateHelper } from '../interfaces/providers/helpers/validate.helper.interface';
import { IUrlHelper } from '../interfaces/providers/helpers/url.helper.interface';

import { Crypto } from '../crypto/crypto';
import { ApiClient } from '../clients/api.client';
import { EventsClient } from '../clients/events.client';
import { EthEventsClient } from '../clients/eth.events/eth.events.client';
import { EthApiClient } from '../clients/eth.apis/eth.api.client';
import { IHttpService } from '../interfaces/providers/http.service.interface';

import { EthMainInfoApi } from '../clients/eth.apis/eth.sub.apis/eth.main.info.api';
import { EthAddressApi } from '../clients/eth.apis/eth.sub.apis/eth.address.api';
import { EthNotifyApi } from '../clients/eth.apis/eth.sub.apis/eth.notify.api';
import { EthContractApi } from '../clients/eth.apis/eth.sub.apis/eth.contract.api';
import { EthRawTransactionApi } from '../clients/eth.apis/eth.sub.apis/eth.raw.transaction.api';
import { EthBlockApi } from '../clients/eth.apis/eth.sub.apis/eth.block.api';
import { EthTokenApi } from '../clients/eth.apis/eth.sub.apis/eth.token.api';
import { EthTransactionsApi } from '../clients/eth.apis/eth.sub.apis/eth.transactions.api';

import { ValidateHelper } from '../providers/helpers/validate.helper';
import { UrlHelper } from '../providers/helpers/url.helper';

import { HttpService } from '../providers/services/http.service';

const diContainer = new Container();

/**
 * Inject http and socket client.
 */
diContainer.bind<ICrypto>(TYPES_DI.ICrypto).to(Crypto);
diContainer.bind<IApiClient>(TYPES_DI.IApiClient).to(ApiClient);
diContainer.bind<IEventsClient>(TYPES_DI.IEventsClient).to(EventsClient);

/**
 * Inject service by module, example eth, btc and etc.
 */
diContainer.bind<IEthApiClient>(TYPES_DI.IEthApiClient).to(EthApiClient);
diContainer
	.bind<IEthEventsClient>(TYPES_DI.IEthEventsClient)
	.to(EthEventsClient);

/**
 * Inject sub api and socket clients.
 */
diContainer.bind<IEthMainInfoApi>(TYPES_DI.IEthMainInfoApi).to(EthMainInfoApi);
diContainer.bind<IEthAddressApi>(TYPES_DI.IEthAddressApi).to(EthAddressApi);
diContainer.bind<IEthNotifyApi>(TYPES_DI.IEthNotifyApi).to(EthNotifyApi);
diContainer.bind<IEthContractApi>(TYPES_DI.IEthContractApi).to(EthContractApi);
diContainer
	.bind<IEthRawTransactionApi>(TYPES_DI.IEthRawTransactionApi)
	.to(EthRawTransactionApi);
diContainer.bind<IEthBlockApi>(TYPES_DI.IEthBlockApi).to(EthBlockApi);
diContainer.bind<IEthTokenApi>(TYPES_DI.IEthTokenApi).to(EthTokenApi);
diContainer.bind<IEthTransactionsApi>(TYPES_DI.IEthTransactionsApi).to(EthTransactionsApi);

/**
 * Inject others providers.
 */
diContainer
	.bind<IHttpService>(TYPES_DI.IHttpService)
	.to(HttpService)
	.inSingletonScope();

/**
 * Inject helpers
 */
diContainer.bind<IValidateHelper>(TYPES_DI.IValidateHelper).to(ValidateHelper);
diContainer.bind<IUrlHelper>(TYPES_DI.IUrlHelper).to(UrlHelper);

export { diContainer };
