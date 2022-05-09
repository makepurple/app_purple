import { stripIndents } from "common-tags";

export class GraphCDNClient {
	public purge(strings: TemplateStringsArray, ...exprs: any[]) {
		return async (variables?: Record<string, any>): Promise<boolean> => {
			const apiUrl = process.env.API_URL;
			const graphcdnToken = process.env.GRAPHCDN_API_TOKEN;

			if (process.env.NODE_ENV !== "production") return false;
			if (!apiUrl || !graphcdnToken) return false;

			return fetch(apiUrl, {
				method: "post",
				headers: {
					"Content-Type": "application/json",
					"graphcdn-token": graphcdnToken
				},
				body: JSON.stringify({
					query: stripIndents(strings, ...exprs),
					variables
				})
			})
				.then((response) => response.json())
				.then((result) => !!result)
				.catch(() => false);
		};
	}
}
