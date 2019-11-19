import 'reflect-metadata';
import { injectable } from 'inversify';

import { IEthRawTransactionApi } from '../../../interfaces/eth.apis/eth.sub.apis/eth.raw.transaction.interface';


@injectable()
export class EthRawTransactionApi implements IEthRawTransactionApi {}
