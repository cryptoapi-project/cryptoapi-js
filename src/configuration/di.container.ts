import { Container } from 'inversify';

import { TYPES_DI } from '../constants/inversify.constants';

import { ICrypto } from '../interfaces/crypto.interface';
import { IApiClient } from '../interfaces/clients/api.client.interface';
import { IEventsClient } from '../interfaces/clients/events.client.interface';

import { IEthApiClient } from '../interfaces/clients/eth/apis/eth.api.client.interface';
import { IUtxoApiClient } from '../interfaces/clients/utxo/apis/utxo.api.client.interface';
import { IEthEventsClient } from '../interfaces/clients/eth/events/eth.events.client.interface';
import { IEthNotifyApi } from '../interfaces/clients/eth/apis/eth.sub.apis/eth.notify.api.interface';
import { IEthAddressApi } from '../interfaces/clients/eth/apis/eth.sub.apis/eth.address.api.interface';
import { IEthMainInfoApi } from '../interfaces/clients/eth/apis/eth.sub.apis/eth.main.info.interface';
import { IEthContractApi } from '../interfaces/clients/eth/apis/eth.sub.apis/eth.contract.api.interface';
import { IEthRawTransactionApi } from '../interfaces/clients/eth/apis/eth.sub.apis/eth.raw.transaction.interface';
import { IEthBlockApi } from '../interfaces/clients/eth/apis/eth.sub.apis/eth.block.interface';
import { IEthTokenApi } from '../interfaces/clients/eth/apis/eth.sub.apis/eth.token.api.interface';
import { IEthTransactionsApi } from '../interfaces/clients/eth/apis/eth.sub.apis/eth.transactions.interface';

import { IUtxoMainInfoApi } from '../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.main.info.interface';
import { IUtxoBlockApi } from '../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.block.interface';
import { IUtxoTransactionsApi } from '../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.transactions.interface';

import { IIdHelper } from '../interfaces/providers/helpers/id.helper.interface';
import { ISubsHelper } from '../interfaces/providers/helpers/subs.helper.interface';

import { Crypto } from '../crypto/crypto';
import { ApiClient } from '../clients/api.client';
import { EventsClient } from '../clients/events.client';

import { EthApiClient } from '../clients/eth/apis/eth.api.client';
import { UtxoApiClient } from '../clients/utxo/apis/utxo.api.client';
import { EthEventsClient } from '../clients/eth/events/eth.events.client';

import { IHttpService } from '../interfaces/providers/http.service.interface';
import { IValidateHelper } from '../interfaces/providers/helpers/validate.helper.interface';
import { IUrlHelper } from '../interfaces/providers/helpers/url.helper.interface';

import { EthMainInfoApi } from '../clients/eth/apis/eth.sub.apis/eth.main.info.api';
import { EthAddressApi } from '../clients/eth/apis/eth.sub.apis/eth.address.api';
import { EthNotifyApi } from '../clients/eth/apis/eth.sub.apis/eth.notify.api';
import { EthContractApi } from '../clients/eth/apis/eth.sub.apis/eth.contract.api';
import { EthRawTransactionApi } from '../clients/eth/apis/eth.sub.apis/eth.raw.transaction.api';
import { EthBlockApi } from '../clients/eth/apis/eth.sub.apis/eth.block.api';
import { EthTokenApi } from '../clients/eth/apis/eth.sub.apis/eth.token.api';
import { EthTransactionsApi } from '../clients/eth/apis/eth.sub.apis/eth.transactions.api';

import { UtxoMainInfoApi } from '../clients/utxo/apis/utxo.sub.apis/utxo.main.info.api';
import { UtxoBlockApi } from '../clients/utxo/apis/utxo.sub.apis/utxo.block.api';
import { UtxoTransactionsApi } from '../clients/utxo/apis/utxo.sub.apis/utxo.transactions.api';

import { HttpService } from '../providers/services/http.service';
import { UrlHelper } from '../providers/helpers/url.helper';
import { ValidateHelper } from '../providers/helpers/validate.helper';

import { IdHelper } from '../providers/helpers/id.helper';
import { SubsHelper } from '../providers/helpers/subs.helper';

const diContainer = new Container();

/**
 * Inject http and socket client.
 */
diContainer.bind<ICrypto>(TYPES_DI.ICrypto).to(Crypto);
diContainer.bind<IApiClient>(TYPES_DI.IApiClient).to(ApiClient);
diContainer.bind<IEventsClient>(TYPES_DI.IEventsClient).to(EventsClient);

/**
 * Inject service by module, example eth, utxo and etc.
 */
diContainer.bind<IEthApiClient>(TYPES_DI.IEthApiClient).to(EthApiClient);
diContainer.bind<IUtxoApiClient>(TYPES_DI.IUtxoApiClient).to(UtxoApiClient);
diContainer.bind<IEthEventsClient>(TYPES_DI.IEthEventsClient).to(EthEventsClient);

/**
 * Inject sub api and socket clients.
 */
diContainer.bind<IEthMainInfoApi>(TYPES_DI.IEthMainInfoApi).to(EthMainInfoApi);
diContainer.bind<IEthAddressApi>(TYPES_DI.IEthAddressApi).to(EthAddressApi);
diContainer.bind<IEthNotifyApi>(TYPES_DI.IEthNotifyApi).to(EthNotifyApi);
diContainer.bind<IEthContractApi>(TYPES_DI.IEthContractApi).to(EthContractApi);
diContainer.bind<IEthRawTransactionApi>(TYPES_DI.IEthRawTransactionApi).to(EthRawTransactionApi);
diContainer.bind<IEthBlockApi>(TYPES_DI.IEthBlockApi).to(EthBlockApi);
diContainer.bind<IEthTokenApi>(TYPES_DI.IEthTokenApi).to(EthTokenApi);
diContainer.bind<IEthTransactionsApi>(TYPES_DI.IEthTransactionsApi).to(EthTransactionsApi);

diContainer.bind<IUtxoMainInfoApi>(TYPES_DI.IUtxoMainInfoApi).to(UtxoMainInfoApi);
diContainer.bind<IUtxoBlockApi>(TYPES_DI.IUtxoBlockApi).to(UtxoBlockApi);
diContainer.bind<IUtxoTransactionsApi>(TYPES_DI.IUtxoTransactionsApi).to(UtxoTransactionsApi);

/**
 * Inject providers.
 */
diContainer.bind<IHttpService>(TYPES_DI.IHttpService).to(HttpService).inSingletonScope();
diContainer.bind<IValidateHelper>(TYPES_DI.IValidateHelper).to(ValidateHelper).inSingletonScope();
diContainer.bind<IUrlHelper>(TYPES_DI.IUrlHelper).to(UrlHelper).inSingletonScope();
diContainer.bind<IIdHelper>(TYPES_DI.IIdHelper).to(IdHelper).inSingletonScope();
diContainer.bind<ISubsHelper>(TYPES_DI.ISubsHelper).to(SubsHelper).inSingletonScope();

export { diContainer };
