import { IServerConfig } from '../interfaces/configs/crypto.config.interface';
import { IConfigurable } from '../interfaces/configs/configurable.interface';
import { ServerConfig } from '../dtos/crypto.config';
import { InternalLibraryException } from '../exceptions/internal.library.exception';
import { injectable } from 'inversify';

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