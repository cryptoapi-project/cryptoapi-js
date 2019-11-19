import { injectable } from 'inversify';
import axios from 'axios';

import { IEthAddressApi } from '../../../interfaces/eth.apis/eth.sub.apis/eth.address.api.interface';

@injectable()
export class EthAddressApi implements IEthAddressApi {
	getNetworkInfo(): any {
		return 'return from ETH ADRRESS API';
	}
}
