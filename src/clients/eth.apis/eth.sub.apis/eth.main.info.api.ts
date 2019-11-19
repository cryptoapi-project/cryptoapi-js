import { injectable } from 'inversify';

import { IEthMainInfoApi } from '../../../interfaces/eth.apis/eth.sub.apis/eth.main.info.interface';

@injectable()
export class EthMainInfoApi implements IEthMainInfoApi {
	constructor() {}
}
