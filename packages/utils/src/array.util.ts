export class ArrayUtils {
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

	public static dropWhile<T>(
		array: readonly T[],
		predicate: (value: T, index: number) => boolean
	): readonly T[] {
		const start = array.findIndex((value, i) => !predicate(value, i));

		return start === -1 ? [] : array.slice(start);
	}

	public static shuffle<T>(array: readonly T[]): readonly T[] {
		return array.slice().sort(() => Math.random() - 0.5);
	}
}
