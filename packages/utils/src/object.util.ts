export class ObjectUtils {
	public static setStatic<T, S extends Record<string, unknown>>(base: T, staticProps: S): T & S {
		const _base: T = base;

		Object.entries(staticProps).forEach(([key, val]) => {
			_base[key as keyof T] = val as any;
		});

		return _base as T & S;
	}
}
