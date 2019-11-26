import { injectable } from 'inversify';

import axios, { AxiosInstance } from 'axios';

import { IHttpService } from '../../interfaces/providers/http.service.interface';

@injectable()
export class HttpService implements IHttpService {
	agent: AxiosInstance = axios.create();

	/**
	 * Configure http client
	 * @method configure
	 * @param {string} token
	 * @param {number} timeout
	 */
	configure(token: string, timeout: number) {
		this.agent.interceptors.request.use((config) => {
			// @ts-ignore
			const delimiter = config.url.includes('?') ? '&' : '?';
			config.url = `${config.url}${delimiter}token=${token}`;
			config.timeout = timeout;
			return config;
		});
	}
}
