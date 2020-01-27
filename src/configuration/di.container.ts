import { Container } from 'inversify';
import bitcoreLib from 'bitcore-lib';
// @ts-ignore
import bitcoreLibCash from 'bitcore-lib-cash';

import { TYPES_DI } from '../constants/inversify.constants';

import { ICrypto } from '../interfaces/crypto.interface';
import { IApiClient } from '../interfaces/clients/api.client.interface';
import { IEventsClient } from '../interfaces/clients/events.client.interface';

import { IEthApiClient } from '../interfaces/clients/eth.api.clients/eth.api.client.interface';
import { IUtxoApiClient } from '../interfaces/clients/utxo/apis/utxo.api.client.interface';
import { IEthEventsClient } from '../interfaces/clients/eth/events/eth.events.client.interface';
import { IEthNotifyApi } from '../interfaces/clients/eth/apis/eth.sub.apis/eth.notify.api.interface';
import { IEthAddressApi } from '../interfaces/clients/eth/apis/eth.sub.apis/eth.address.api.interface';
import { IEthMainInfoApi, IMainInfoApi } from '../interfaces/clients/eth.api.clients/sub.api.clients/main.info.interface';
import { IEthContractApi } from '../interfaces/clients/eth/apis/eth.sub.apis/eth.contract.api.interface';
import { IEthRawTransactionApi } from '../interfaces/clients/eth/apis/eth.sub.apis/eth.raw.transaction.interface';
import { IEthBlockApi } from '../interfaces/clients/eth/apis/eth.sub.apis/eth.block.interface';
import { IEthTokenApi } from '../interfaces/clients/eth/apis/eth.sub.apis/eth.token.api.interface';
import { IEthTransactionsApi } from '../interfaces/clients/eth/apis/eth.sub.apis/eth.transactions.interface';

import { IUtxoMainInfoApi } from '../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.main.info.interface';
import { IUtxoBlockApi } from '../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.block.interface';
import { IUtxoTransactionsApi } from '../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.transactions.interface';
import { IUtxoAddressApi } from '../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.address.api.interface';
import { IUtxoOutputsApi } from '../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.outputs.interface';

import { IIdHelper } from '../interfaces/providers/helpers/id.helper.interface';
import { ISubsHelper } from '../interfaces/providers/helpers/subs.helper.interface';

import { Crypto } from '../crypto/crypto';
import { ApiClient } from '../clients/api.client';
import { EventsClient } from '../clients/events.client';

import { EthApiClient } from '../clients/eth.api.clients/api.client';
import { UtxoApiClient } from '../clients/utxo/apis/utxo.api.client';
import { EthEventsClient } from '../clients/eth/events/eth.events.client';
import { UtxoEventsClient } from '../clients/utxo/events/utxo.events.client';

import { IHttpService } from '../interfaces/providers/http.service.interface';
import { IValidateHelper } from '../interfaces/providers/helpers/validate.helper.interface';
import { IUrlHelper } from '../interfaces/providers/helpers/url.helper.interface';

import { MainInfoApi } from '../clients/eth.api.clients/sub.api.clients/main.info.api';

import { EthAddressApi } from '../clients/eth/apis/sub.apis/eth.address.api';
import { EthNotifyApi } from '../clients/eth/apis/sub.apis/eth.notify.api';
import { EthContractApi } from '../clients/eth/apis/sub.apis/eth.contract.api';
import { EthRawTransactionApi } from '../clients/eth/apis/sub.apis/eth.raw.transaction.api';
import { EthBlockApi } from '../clients/eth/apis/sub.apis/eth.block.api';
import { EthTokenApi } from '../clients/eth/apis/sub.apis/eth.token.api';
import { EthTransactionsApi } from '../clients/eth/apis/sub.apis/eth.transactions.api';

import { UtxoMainInfoApi } from '../clients/utxo/apis/utxo.sub.apis/utxo.main.info.api';
import { UtxoBlockApi } from '../clients/utxo/apis/utxo.sub.apis/utxo.block.api';
import { UtxoTransactionsApi } from '../clients/utxo/apis/utxo.sub.apis/utxo.transactions.api';
import { UtxoAddressApi } from '../clients/utxo/apis/utxo.sub.apis/utxo.address.api';
import { UtxoOutputsApi } from '../clients/utxo/apis/utxo.sub.apis/utxo.outputs.api';

import { HttpService } from '../providers/services/http.service';
import { UrlHelper } from '../providers/helpers/url.helper';
import { ValidateHelper } from '../providers/helpers/validate.helper';

import { IdHelper } from '../providers/helpers/id.helper';
import { SubsHelper } from '../providers/helpers/subs.helper';
import { IUtxoEventsClient } from 'interfaces/clients/utxo/events/utxo.events.client.interface';
import { UtxoRawTransactionApi } from '../clients/utxo/apis/utxo.sub.apis/utxo.raw.transaction.api';
import { IUtxoRawTransactionApi } from '../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.raw.transaction.interface';

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
diContainer.bind<IApiClient>(TYPES_DI.`IEth`ApiClient).to(EthApiClient);
diContainer.bind<IUtxoApiClient>(TYPES_DI.IUtxoApiClient).to(UtxoApiClient);
diContainer.bind<IEthEventsClient>(TYPES_DI.IEthEventsClient).to(EthEventsClient);
diContainer.bind<IUtxoEventsClient>(TYPES_DI.IUtxoEventsClient).to(UtxoEventsClient);

/**
 * Inject sub api and socket clients.
 */

diContainer.bind<IEthApiFactory>(TYPES_DI.IApiFactory).to(EthApiFactory);

diContainer.bind(TYPES_DI.IMainInfoApi).to(MainInfoApi);


diContainer.bind<IEthAddressApi>(TYPES_DI.IEthAddressApi).to(EthAddressApi);
diContainer.bind<IEthNotifyApi>(TYPES_DI.IEthNotifyApi).to(EthNotifyApi);
diContainer.bind<IEthContractApi>(TYPES_DI.IEthContractApi).to(EthContractApi);
diContainer.bind<IEthRawTransactionApi>(TYPES_DI.IEthRawTransactionApi).to(EthRawTransactionApi);
diContainer.bind<IEthBlockApi>(TYPES_DI.IEthBlockApi).to(EthBlockApi);
diContainer.bind<IEthTokenApi>(TYPES_DI.IEthTokenApi).to(EthTokenApi);
diContainer.bind<IEthTransactionsApi>(TYPES_DI.IEthTransactionsApi).to(EthTransactionsApi);

diContainer.bind<IUtxoMainInfoApi>(TYPES_DI.IUtxoMainInfoApi).to(UtxoMainInfoApi);
diContainer.bind<IUtxoBlockApi>(TYPES_DI.IUtxoBlockApi).to(UtxoBlockApi);
diContainer.bind<IUtxoRawTransactionApi>(TYPES_DI.IUtxoRawTransactionApi).to(UtxoRawTransactionApi);
diContainer.bind<IUtxoTransactionsApi>(TYPES_DI.IUtxoTransactionsApi).to(UtxoTransactionsApi);
diContainer.bind<IUtxoAddressApi>(TYPES_DI.IUtxoAddressApi).to(UtxoAddressApi);
diContainer.bind<IUtxoOutputsApi>(TYPES_DI.IUtxoOutputsApi).to(UtxoOutputsApi);
/**
 * Inject providers.
 */
diContainer.bind<IHttpService>(TYPES_DI.IHttpService).to(HttpService).inSingletonScope();
diContainer.bind<IValidateHelper>(TYPES_DI.IValidateHelper).to(ValidateHelper).inSingletonScope();
diContainer.bind<IUrlHelper>(TYPES_DI.IUrlHelper).to(UrlHelper).inSingletonScope();
diContainer.bind<IIdHelper>(TYPES_DI.IIdHelper).to(IdHelper).inSingletonScope();
diContainer.bind<ISubsHelper>(TYPES_DI.ISubsHelper).to(SubsHelper).inSingletonScope();

diContainer.bind(TYPES_DI.ICoreLibBch).toConstantValue(bitcoreLibCash);
diContainer.bind(TYPES_DI.ICoreLibBtc).toConstantValue(bitcoreLib);

export { diContainer };
