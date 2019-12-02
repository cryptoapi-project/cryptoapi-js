import { BaseLibraryException } from './base.exception';

export class InternalLibraryException extends BaseLibraryException {
	constructor(message: string) {
		super(message);
	}
}
