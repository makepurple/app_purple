export class ArrayUtils {
	public static dropWhile<T>(
		array: readonly T[],
		predicate: (value: T, index: number) => boolean
	): readonly T[] {
		const start = array.findIndex((value, i) => !predicate(value, i));

		return start === -1 ? [] : array.slice(start);
	}

	public static dropRightWhile<T>(
		array: readonly T[],
		predicate: (value: T, index: number) => boolean
	): readonly T[] {
		const end = array
			.slice()
			.reverse()
			.findIndex((value, i) => !predicate(value, i));

		if (end === -1) return [];
		if (end === 0) return array;

		return array.slice(0, -end);
	}
}
