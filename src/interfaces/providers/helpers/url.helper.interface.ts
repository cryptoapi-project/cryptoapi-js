export interface IUrlHelper {
	addOptionsToUrl(url: string, options?: {[name: string]: any}): string;
}
