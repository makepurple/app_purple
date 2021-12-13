export class LangUtils {
	public static isNil<T extends unknown>(value: Maybe<T>): value is null | undefined {
		return value === undefined || value === null;
	}
}
