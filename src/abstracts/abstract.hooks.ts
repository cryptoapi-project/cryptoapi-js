import { injectable } from 'inversify';

import { HooksConfig } from '../dtos/crypto.config';
import { InternalLibraryException } from '../exceptions/library.exceptions/internal.library.exception';
import { IConfigurable } from '../interfaces/configs/configurable.interface';
import { IHooksConfig } from '../interfaces/configs/crypto.config.interface';

@injectable()
export abstract class AbstractHooks implements IConfigurable<IHooksConfig> {
	protected config: IHooksConfig|null = null;

	configure(config: IHooksConfig): void {
		this.config = new HooksConfig(config);
	}

	protected _checkConfig() {
		if (!this.config) {
			throw new InternalLibraryException('Library error configuration: not configured service.');
		}
	}
}
