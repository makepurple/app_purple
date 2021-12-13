export interface PromiseUtilsMapOptions {
	concurrency: number;
}

export class PromiseUtils {
	public static map = <I, R>(
		items: I[],
		options: Maybe<Partial<PromiseUtilsMapOptions>>,
		mapFn: (item: I, index: number) => Promise<R>
	): Promise<R[]> => {
		const { concurrency }: PromiseUtilsMapOptions = { concurrency: 1, ...(options ?? {}) };

		if (items.length === 0) return Promise.resolve([]);

		const results: R[] = Array(items.length).fill(null);
		const trueConcurrencyLimit: number = Math.min(items.length, concurrency);

		let index: number;

		const iterablePromiseFn = (item: I, i: number): Promise<I | undefined> => {
			return new Promise<I | undefined>((resolve, reject) => {
				return mapFn(item, i)
					.then((result) => {
						results[i] = result;

						const isOutOfItems: boolean = index++ >= items.length - 1;

						return isOutOfItems
							? resolve(undefined)
							: resolve(iterablePromiseFn(items[index], index));
					})
					.catch(reject);
			});
		};

		const rateLimitedProcessor = Array(trueConcurrencyLimit)
			.fill(null)
			.map((__, i) => {
				index = i;

				return iterablePromiseFn(items[i], i);
			});

		return Promise.all(rateLimitedProcessor).then(() => results);
	};

	public static wait(msTime: number): Promise<void> {
		return new Promise<void>((resolve) => {
			setTimeout(() => resolve(), msTime);
		});
	}
}
