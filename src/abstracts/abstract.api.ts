import { injectable } from 'inversify';
import { ServerConfig } from '../dtos/crypto.config';
import { InternalLibraryException } from '../exceptions/library.exceptions/internal.library.exception';
import { IConfigurable } from '../interfaces/configs/configurable.interface';
import { IServerConfig } from '../interfaces/configs/crypto.config.interface';

@injectable()
export abstract class AbstractApi implements IConfigurable<IServerConfig> {
	protected config: IServerConfig|null = null;

	configure(config: IServerConfig): void {
		this.config = new ServerConfig(config);
	}

	protected _checkConfig() {
		if (!this.config) {
			throw new InternalLibraryException('Library error configuration: not configured service.');
		}
	}
}
