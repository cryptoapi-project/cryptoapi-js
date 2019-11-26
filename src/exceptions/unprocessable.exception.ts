import { HttpException } from './base.http.exception';
import { CODE } from '../constants/http.constants';

export class UnprocessableException extends HttpException {
	constructor(message: string, status = CODE.UNPROCESSABLE_ENTITY) {
		super(message, status);
	}
}
