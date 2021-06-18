export class UrlUtils {
	public static toQuery(
		params: Record<string, number | string>,
		delimiter: string = "&"
	): string {
		return Object.keys(params)
			.map((key) => `${key}=${params[key]}`)
			.join(delimiter);
	}
}
