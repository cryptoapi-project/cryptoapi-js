import { IErrorDetail } from '../interfaces/errors/error.detail.interface';

export class ServerResponseException {
	readonly status: number;
	readonly errors: IErrorDetail[];

	constructor(status: number, errors: IErrorDetail[]) {
		this.status = status;
		this.errors = errors;
	}
}
