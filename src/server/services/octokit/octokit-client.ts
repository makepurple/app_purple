import { createTokenAuth } from "@octokit/auth-token";
import { graphql } from "@octokit/graphql";
import { oneLine } from "common-tags";

export class OctokitClient {
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	public graphql(accessToken: string = process.env.GITHUB_ACCESS_TOKEN!) {
		return <TVariables extends Record<string, unknown>>(
			strings: TemplateStringsArray,
			...exprs: any[]
		) => {
			const query = oneLine(strings, ...exprs);
			const token = createTokenAuth(accessToken);

			return (variables?: TVariables) => {
				return graphql({
					query,
					...variables,
					headers: {
						Authorization: `token ${token}`
					}
				});
			};
		};
	}
}
