export class FunctionUtils {
	public static compose<TFunc extends (...args: any[]) => any>(...fns: readonly TFunc[]): TFunc {
		return ((...args) => {
			return fns.reduce((prev, fn) => [fn(...prev)], args)[0];
		}) as TFunc;
	}
}
