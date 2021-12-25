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

	public static isRelative(url: string): boolean {
		return /^(\.\.\/|\.\/|\/)/.test(url) && this.isValid(`https://google.com${url}`);
	}

	public static isImage(url: string): boolean {
		const isValid = this.isValid(url);
		const isRelative = this.isRelative(url);

		if (!isValid && !isRelative) return false;

		const urlString = isValid ? url : `https://google.com${url}`;
		const extension = new URL(urlString).pathname.split(".").at(-1);

		if (!extension) return false;

		return ["gif", "jpeg", "jpg", "png", "webp"].includes(extension);
	}
}