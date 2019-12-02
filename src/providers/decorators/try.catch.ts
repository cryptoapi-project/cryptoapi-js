import { ServerResponseException } from '../../exceptions/http.exceptions/server.response.exception';

export function TryCatch(
	target: object,
	propertyKey: string,
	descriptor: TypedPropertyDescriptor<any>,
) {
	const originalMethod = descriptor.value;
	descriptor.value = async function(...args: any[]) {
		let result = null;
		try {
			result = await originalMethod.apply(this, args);
			return result;
		} catch (error) {
			if (!error.response) {
				throw error;
			} else {
				throw new ServerResponseException(error.response.status, error.response.data.errors);
			}
		}
	};

	return descriptor;
}
