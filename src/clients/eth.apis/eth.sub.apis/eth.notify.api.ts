import { inject, injectable } from 'inversify';

import { TYPES_DI } from '../../../constants/inversify.constants';

import { IEthNotifyApi } from '../../../interfaces/eth.apis/eth.sub.apis/eth.notify.api.interface';
import { IHttpService } from '../../../interfaces/providers/http.service.interface';

@injectable()
export class EthNotifyApi implements IEthNotifyApi {
	constructor(@inject(TYPES_DI.IHttpService) httpService: IHttpService) {}
}
