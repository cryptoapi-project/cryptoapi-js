import { CODE } from '../../constants/http.constants';
import { HttpException } from './base.http.exception';

export class UnprocessableException extends HttpException {
	constructor(message: string, status = CODE.UNPROCESSABLE_ENTITY) {
		super(message, status);
	}
}
