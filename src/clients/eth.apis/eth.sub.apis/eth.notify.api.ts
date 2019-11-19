import { injectable } from 'inversify';

import { IEthNotifyApi } from '../../../interfaces/eth.apis/eth.sub.apis/eth.notify.api.interface';

@injectable()
export class EthNotifyApi implements IEthNotifyApi {
	subscribeToken() {
		return Promise.resolve(true);
	}

	unsubscribeToken() {
		return Promise.resolve(true);
	}
}
