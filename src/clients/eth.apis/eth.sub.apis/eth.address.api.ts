import { injectable } from 'inversify';

import { IEthAddressApi } from '../../../interfaces/eth.apis/eth.sub.apis/eth.address.api.interface';

@injectable()
export class EthAddressApi implements IEthAddressApi {}
