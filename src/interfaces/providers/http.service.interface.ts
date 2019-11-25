import { AxiosInstance } from 'axios';
import { IConfigurable } from '../configs/configurable.interface';

export interface IHttpService extends IConfigurable<string> {
	agent: AxiosInstance;
}
