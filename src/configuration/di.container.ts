import bitcoreLib from 'bitcore-lib';
// @ts-ignore
import bitcoreLibCash from 'bitcore-lib-cash';
import { Container } from 'inversify';

import { HooksClient } from '@src/clients/hooks.client';
import { HookEvents } from '@src/clients/hooks/apis/hook.events';
import { IHooksClient } from '@src/interfaces/clients/hooks.client.interface';
import { IHookEvents } from '@src/interfaces/clients/hooks/hook.events.interface';

import { ApiClient } from '../clients/api.client';
import { EthApi, EthApiClient } from '../clients/eth/apis/eth.api.client';
import { EthApiFactoryDto } from '../clients/eth/apis/eth.api.factory.dto';
import { EthAddressApi } from '../clients/eth/apis/eth.sub.apis/eth.address.api';
import { EthBlockApi } from '../clients/eth/apis/eth.sub.apis/eth.block.api';
import { EthContractApi } from '../clients/eth/apis/eth.sub.apis/eth.contract.api';
import { EthMainInfoApi } from '../clients/eth/apis/eth.sub.apis/eth.main.info.api';
import { EthNotifyApi } from '../clients/eth/apis/eth.sub.apis/eth.notify.api';
import { EthRawTransactionApi } from '../clients/eth/apis/eth.sub.apis/eth.raw.transaction.api';
import { EthTokenApi } from '../clients/eth/apis/eth.sub.apis/eth.token.api';
import { EthTransactionsApi } from '../clients/eth/apis/eth.sub.apis/eth.transactions.api';
import { EthTestnetApiClient } from '../clients/eth/apis/eth.testnet.api.client';
import { EthEvents, EthEventsClient } from '../clients/eth/events/eth.events.client';
import { EthTestnetEventsClient } from '../clients/eth/events/eth.testnet.events.client';
import { EventsClient } from '../clients/events.client';
import { KlayApi, KlayApiClient } from '../clients/klay/apis/klay.api.client';
import { KlayApiFactoryDto } from '../clients/klay/apis/klay.api.factory.dto';
import { KlayTestnetApiClient } from '../clients/klay/apis/klay.testnet.api.client';
import { KlayEvents, KlayEventsClient } from '../clients/klay/events/klay.events.client';
import { KlayTestnetEventsClient } from '../clients/klay/events/klay.testnet.events.client';
import { UtxoApi, UtxoApiClient } from '../clients/utxo/apis/utxo.api.client';
import { UtxoAddressApi } from '../clients/utxo/apis/utxo.sub.apis/utxo.address.api';
import { UtxoBlockApi } from '../clients/utxo/apis/utxo.sub.apis/utxo.block.api';
import { UtxoMainInfoApi } from '../clients/utxo/apis/utxo.sub.apis/utxo.main.info.api';
import { UtxoOutputsApi } from '../clients/utxo/apis/utxo.sub.apis/utxo.outputs.api';
import { UtxoRawTransactionApi } from '../clients/utxo/apis/utxo.sub.apis/utxo.raw.transaction.api';
import { UtxoTransactionsApi } from '../clients/utxo/apis/utxo.sub.apis/utxo.transactions.api';
import { UtxoEvents, UtxoEventsClient } from '../clients/utxo/events/utxo.events.client';
import { TYPES_DI } from '../constants/inversify.constants';
import { Crypto } from '../crypto/crypto';
import { IApiClient } from '../interfaces/clients/api.client.interface';
import { IEthNotifyApi } from '../interfaces/clients/eth/apis/eth.sub.apis/eth.notify.api.interface';
import { IEthEventsClient } from '../interfaces/clients/eth/events/eth.events.client.interface';
import { IEthEvents } from '../interfaces/clients/eth/events/eth.events.interface';
import { IEthTestnetEventsClient } from '../interfaces/clients/eth/events/eth.testnet.events.client.interface';
import { IEventsClient } from '../interfaces/clients/events.client.interface';
import { IKlayEventsClient } from '../interfaces/clients/klay/events/klay.events.client.interface';
import { IKlayEvents } from '../interfaces/clients/klay/events/klay.events.interface';
import { IKlayTestnetEventsClient } from '../interfaces/clients/klay/events/klay.testnet.events.client.interface';
import { IUtxoApi, IUtxoApiClient } from '../interfaces/clients/utxo/apis/utxo.api.client.interface';
import { IUtxoAddressApi } from '../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.address.api.interface';
import { IUtxoBlockApi } from '../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.block.interface';
import { IUtxoMainInfoApi } from '../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.main.info.interface';
import { IUtxoOutputsApi } from '../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.outputs.interface';
import { IUtxoRawTransactionApi } from '../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.raw.transaction.interface';
import { IUtxoTransactionsApi } from '../interfaces/clients/utxo/apis/utxo.sub.apis/utxo.transactions.interface';
import { IUtxoEvents, IUtxoEventsClient } from '../interfaces/clients/utxo/events/utxo.events.client.interface';
import { ICrypto } from '../interfaces/crypto.interface';
import { IIdHelper } from '../interfaces/providers/helpers/id.helper.interface';
import { ISubsHelper } from '../interfaces/providers/helpers/subs.helper.interface';
import { IUrlHelper } from '../interfaces/providers/helpers/url.helper.interface';
import { IValidateHelper } from '../interfaces/providers/helpers/validate.helper.interface';
import { IHttpService } from '../interfaces/providers/http.service.interface';
import { IdHelper } from '../providers/helpers/id.helper';
import { SubsHelper } from '../providers/helpers/subs.helper';
import { UrlHelper } from '../providers/helpers/url.helper';
import { ValidateHelper } from '../providers/helpers/validate.helper';
import { HttpService } from '../providers/services/http.service';

const diContainer = new Container();

/**
 * Inject http and socket client.
 */
diContainer.bind<ICrypto>(TYPES_DI.ICrypto).to(Crypto);
diContainer.bind<IApiClient>(TYPES_DI.IApiClient).to(ApiClient);
diContainer.bind<IEventsClient>(TYPES_DI.IEventsClient).to(EventsClient);
diContainer.bind<IHooksClient>(TYPES_DI.IHooksClient).to(HooksClient);

/**
 * Inject service by module, example eth, utxo and etc.
 */
diContainer.bind(TYPES_DI.IEthApiFactoryDto).to(EthApiFactoryDto);
diContainer.bind(TYPES_DI.IEthApiClient).to(EthApiClient);
diContainer.bind(TYPES_DI.IEthTestnetApiClient).to(EthTestnetApiClient);
diContainer.bind(TYPES_DI.IEthApi).to(EthApi);

diContainer.bind<IEthEventsClient>(TYPES_DI.IEthEventsClient).to(EthEventsClient);
diContainer.bind<IEthTestnetEventsClient>(TYPES_DI.IEthTestnetEventsClient).to(EthTestnetEventsClient);
diContainer.bind<IEthEvents>(TYPES_DI.IEthEvents).to(EthEvents);

diContainer.bind(TYPES_DI.IKlayApiFactoryDto).to(KlayApiFactoryDto);
diContainer.bind(TYPES_DI.IKlayApiClient).to(KlayApiClient);
diContainer.bind(TYPES_DI.IKlayTestnetApiClient).to(KlayTestnetApiClient);
diContainer.bind(TYPES_DI.IKlayApi).to(KlayApi);

diContainer.bind<IKlayEventsClient>(TYPES_DI.IKlayEventsClient).to(KlayEventsClient);
diContainer.bind<IKlayTestnetEventsClient>(TYPES_DI.IKlayTestnetEventsClient).to(KlayTestnetEventsClient);
diContainer.bind<IKlayEvents>(TYPES_DI.IKlayEvents).to(KlayEvents);

diContainer.bind<IUtxoApiClient>(TYPES_DI.IUtxoApiClient).to(UtxoApiClient);
diContainer.bind<IUtxoApi>(TYPES_DI.IUtxoApi).to(UtxoApi);

diContainer.bind<IUtxoEventsClient>(TYPES_DI.IUtxoEventsClient).to(UtxoEventsClient);
diContainer.bind<IUtxoEvents>(TYPES_DI.IUtxoEvents).to(UtxoEvents);

/**
 * Inject sub api and socket clients.
 */
diContainer.bind(TYPES_DI.IEthMainInfoApi).to(EthMainInfoApi);
diContainer.bind(TYPES_DI.IEthAddressApi).to(EthAddressApi);
diContainer.bind(TYPES_DI.IEthTokenApi).to(EthTokenApi);

diContainer.bind<IEthNotifyApi>(TYPES_DI.IEthNotifyApi).to(EthNotifyApi);
diContainer.bind(TYPES_DI.IEthBlockApi).to(EthBlockApi);

diContainer.bind(TYPES_DI.IEthContractApi).to(EthContractApi);
diContainer.bind(TYPES_DI.IEthRawTransactionApi).to(EthRawTransactionApi);
diContainer.bind(TYPES_DI.IEthTransactionsApi).to(EthTransactionsApi);

diContainer.bind<IUtxoMainInfoApi>(TYPES_DI.IUtxoMainInfoApi).to(UtxoMainInfoApi);
diContainer.bind<IUtxoBlockApi>(TYPES_DI.IUtxoBlockApi).to(UtxoBlockApi);
diContainer.bind<IUtxoRawTransactionApi>(TYPES_DI.IUtxoRawTransactionApi).to(UtxoRawTransactionApi);
diContainer.bind<IUtxoTransactionsApi>(TYPES_DI.IUtxoTransactionsApi).to(UtxoTransactionsApi);
diContainer.bind<IUtxoAddressApi>(TYPES_DI.IUtxoAddressApi).to(UtxoAddressApi);
diContainer.bind<IUtxoOutputsApi>(TYPES_DI.IUtxoOutputsApi).to(UtxoOutputsApi);

diContainer.bind<IHookEvents>(TYPES_DI.IUtxoOutputsApi).to(HookEvents);
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
