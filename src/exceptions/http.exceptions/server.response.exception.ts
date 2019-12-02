import { IErrorDetail } from '../../interfaces/errors/error.detail.interface';

export class ServerResponseException {
	readonly status: number;
	readonly errors: IErrorDetail[]|string;

	constructor(status: number, errors: IErrorDetail[]|string) {
		this.status = status;
		this.errors = errors;
	}
}
