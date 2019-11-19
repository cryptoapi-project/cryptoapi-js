import { Container } from 'inversify';

import { TYPES_DEPENDENCIES } from '../constants/inversify.constants';

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

import { Crypto } from '../crypto/crypto';
import { ApiClient } from '../clients/api.client';
import { EventsClient } from '../clients/events.client';
import { EthEventsClient } from '../clients/eth.events/eth.events.client';
import { EthApiClient } from '../clients/eth.apis/eth.api.client';

import { EthMainInfoApi } from '../clients/eth.apis/eth.sub.apis/eth.main.info.api';
import { EthAddressApi } from '../clients/eth.apis/eth.sub.apis/eth.address.api';
import { EthNotifyApi } from '../clients/eth.apis/eth.sub.apis/eth.notify.api';
import { EthContractApi } from '../clients/eth.apis/eth.sub.apis/eth.contract.api';
import { EthRawTransactionApi } from '../clients/eth.apis/eth.sub.apis/eth.raw.transaction.api';

const diContainer = new Container();

/**
 * Inject http and socket client.
 */
diContainer.bind<ICrypto>(TYPES_DEPENDENCIES.ICrypto).to(Crypto);
diContainer.bind<IApiClient>(TYPES_DEPENDENCIES.IApiClient).to(ApiClient);
diContainer.bind<IEventsClient>(TYPES_DEPENDENCIES.IEventsClient).to(EventsClient);

/**
 * Inject service by module, example eth, btc and etc.
 */
diContainer.bind<IEthApiClient>(TYPES_DEPENDENCIES.IEthApiClient).to(EthApiClient);
diContainer.bind<IEthEventsClient>(TYPES_DEPENDENCIES.IEthEventsClient).to(EthEventsClient);

/**
 * Inject sub api and socket clients.
 */
diContainer.bind<IEthMainInfoApi>(TYPES_DEPENDENCIES.IEthMainInfoApi).to(EthMainInfoApi);
diContainer.bind<IEthAddressApi>(TYPES_DEPENDENCIES.IEthAddressApi).to(EthAddressApi);
diContainer.bind<IEthNotifyApi>(TYPES_DEPENDENCIES.IEthNotifyApi).to(EthNotifyApi);
diContainer.bind<IEthContractApi>(TYPES_DEPENDENCIES.IEthContractApi).to(EthContractApi);
diContainer.bind<IEthRawTransactionApi>(TYPES_DEPENDENCIES.IEthRawTransactionApi).to(EthRawTransactionApi);

export { diContainer };
