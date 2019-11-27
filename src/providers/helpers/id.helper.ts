import { injectable } from 'inversify';

import { IIdHelper } from '../../interfaces/providers/helpers/id.helper.interface';

@injectable()
export class IdHelper implements IIdHelper {

	private id = 0;

	get() {
		this.id += 1;
		return this.id;
	}

}
