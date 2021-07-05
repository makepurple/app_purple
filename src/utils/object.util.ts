export class ObjectUtils {
	public static setStatic<T, S extends Record<string, unknown>>(base: T, staticProps: S): T & S {
		const _base: T = base;

		Object.entries(staticProps).forEach(([key, val]) => {
			_base[key] = val;
		});

		return _base as T & S;
	}
}
