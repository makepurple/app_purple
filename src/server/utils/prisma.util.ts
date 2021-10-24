/* eslint-disable prettier/prettier */
type DeepNonNullArgs<T> =
	T extends null
		? undefined
		: T extends { [key: string]: any }
			? { [P in keyof T]: DeepNonNullArgs<T[P]> }
			: T extends (infer U)[]
				? DeepNonNullArgs<U>[]
				: T extends readonly (infer U)[]
					? readonly DeepNonNullArgs<U>[]
					: T;
/* eslint-enable prettier/prettier */

export class PrismaUtils {
	/**
	 * !HACK
	 * @description This casts all null properties on a nexus input to undefined (recursively)
	 * @author David Lee
	 * @date October 24, 2021
	 */
	public static nonNull = <T>(input: T): DeepNonNullArgs<T> => {
		if (input === null) {
			return undefined as DeepNonNullArgs<T>;
		}

		if (Array.isArray(input)) {
			return (input as readonly any[]).map((value) =>
				PrismaUtils.nonNull(value)
			) as DeepNonNullArgs<T>;
		}

		if (typeof input === "object") {
			const keys = Object.keys(input) as (keyof T)[];

			return keys.reduce((acc, key) => {
				const value = input[key];

				return { ...acc, [key]: PrismaUtils.nonNull(value) } as DeepNonNullArgs<T>;
			}, {} as DeepNonNullArgs<T>);
		}

		return input as DeepNonNullArgs<T>;
	};
}
