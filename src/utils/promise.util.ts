export class PromiseUtils {
	public static wait(msTime: number): Promise<void> {
		return new Promise<void>((resolve) => {
			setTimeout(() => resolve(), msTime);
		});
	}
}
