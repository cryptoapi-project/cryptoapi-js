import { inject, injectable } from 'inversify';

import { AbstractHooks } from '../../../abstracts/abstract.hooks';
import { TYPES_DI } from '../../../constants/inversify.constants';
import { WebHookLogOutDTO } from '../../../dtos/hooks/web.hook.event.dto';
import { InternalLibraryException } from '../../../exceptions/library.exceptions/internal.library.exception';
import { IHookEvents } from '../../../interfaces/clients/hooks/hook.events.interface';
import { IUrlHelper } from '../../../interfaces/providers/helpers/url.helper.interface';
import { IHttpService } from '../../../interfaces/providers/http.service.interface';
import { TWebHookEventsRequest } from '../../../types/hooks/events.request.type';

@injectable()
export class HookEvents extends AbstractHooks implements IHookEvents {

	constructor(
		@inject(TYPES_DI.IHttpService) private readonly httpService: IHttpService,
		@inject(TYPES_DI.IUrlHelper) private readonly urlHelper: IUrlHelper,
	) {
		super();
	}

	/**
	 *  Get hook events by hook id for user.
	 * @method getHookEvents
	 * @param {number} hookId
	 * @param {TWebHookEventsRequest} options
	 */
	async getHookEvents(hookId: number, options?: TWebHookEventsRequest): Promise<WebHookLogOutDTO> {
		this._checkConfig();

		if (!hookId) {
			throw new InternalLibraryException('Addresses are required.');
		}

		const query = `${this.urlHelper.addOptionsToUrl('', options)}`;

		const transaction = await this.httpService.agent.get(
			`${this.config!.baseUrl}/web-hooks/${hookId}/events${query}`,
		);
		return new WebHookLogOutDTO(transaction.data);
	}
}
