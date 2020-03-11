import { IHookEvents } from '@src/interfaces/clients/hooks/hook.events.interface';

import { IConfigurable } from '../configs/configurable.interface';
import { IHooksConfig } from '../configs/crypto.config.interface';

export interface IHooksClient extends IConfigurable<IHooksConfig> {
	events: IHookEvents;
}
