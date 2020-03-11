import { WebHookLogOutDTO } from '../../../dtos/hooks/web.hook.event.dto';
import { TWebHookEventsRequest } from '../../../types/hooks/events.request.type';
import { IConfigurable } from '../../configs/configurable.interface';
import { IHooksConfig } from '../../configs/crypto.config.interface';

export interface IHookEvents extends IConfigurable<IHooksConfig> {
	getHookEvents(hookId: number, options: TWebHookEventsRequest): Promise<WebHookLogOutDTO>;
}
