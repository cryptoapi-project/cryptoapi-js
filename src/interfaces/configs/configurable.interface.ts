export interface IConfigurable<T> {
	configure(config: T, props?: any): void;
}
