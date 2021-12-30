import type { FieldPath, FieldPathValue, FieldValues, UnpackNestedValue } from "react-hook-form";
import { get } from "react-hook-form";

export class ObjectUtils {
	public static get<
		TFieldValues extends FieldValues = FieldValues,
		TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
	>(
		obj: Maybe<TFieldValues>,
		path: TName
	): UnpackNestedValue<FieldPathValue<TFieldValues, TName>> | undefined {
		if (!obj) return undefined;

		return get(obj, path);
	}

	public static setStatic<T, S extends Record<string, unknown>>(base: T, staticProps: S): T & S {
		const _base: T = base;

		Object.entries(staticProps).forEach(([key, val]) => {
			_base[key as keyof T] = val as any;
		});

		return _base as T & S;
	}
}
