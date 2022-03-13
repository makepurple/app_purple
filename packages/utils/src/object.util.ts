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

	/**
	 * @description Get the total count of words in all strings in a Json type (deeply nested).
	 * @author David Lee
	 * @date March 12, 2022
	 */
	public static getWordCount<T extends Json>(obj: T): number {
		if (!obj) return 0;

		if (typeof obj === "number") return 0;
		if (typeof obj === "boolean") return 0;
		if (typeof obj === "string") return obj.trim().match(/\w+/g)?.length ?? 0;

		if (Array.isArray(obj)) {
			return obj.reduce<number>((sum, item) => sum + ObjectUtils.getWordCount(item), 0);
		}

		if (typeof obj === "object") {
			return Object.values(obj).reduce<number>(
				(sum, value) => sum + ObjectUtils.getWordCount(value),
				0
			);
		}

		return 0;
	}

	public static setStatic<T, S extends Record<string, unknown>>(base: T, staticProps: S): T & S {
		const _base: T = base;

		Object.entries(staticProps).forEach(([key, val]) => {
			_base[key as keyof T] = val as any;
		});

		return _base as T & S;
	}
}
