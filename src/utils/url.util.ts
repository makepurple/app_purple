export class UrlUtils {
	public static toQuery(
		params: Record<string, number | string>,
		delimiter: string = "&"
	): string {
		return Object.keys(params)
			.map((key) => `${key}=${params[key]}`)
			.join(delimiter);
	}

	public static appendQuery(url: string, params: Record<string, number | string>): string {
		return `${url}${url.indexOf("?") === -1 ? "?" : "&"}${UrlUtils.toQuery(params)}`;
	}

	public static isValid(url: string): boolean {
		try {
			const _url = new URL(url);

			return _url.protocol === "http:" || _url.protocol === "https:";
		} catch {
			return false;
		}
	}
}
