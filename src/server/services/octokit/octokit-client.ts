import { redis } from "@/server/redis";
import { Logger } from "@/server/utils";
import { createTokenAuth } from "@octokit/auth-token";
import { Octokit } from "@octokit/core";
import { throttling } from "@octokit/plugin-throttling";
import type { RequestOptions } from "@octokit/types";
import Bottleneck from "bottleneck";
import { oneLine } from "common-tags";

const connection = new Bottleneck.IORedisConnection({ client: redis.instance });

connection.on("error", (err) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	Logger.error(err.toString?.());
});

export class OctokitClient {
	public instance = new (Octokit.plugin(throttling))({
		throttle: {
			onRateLimit: (retryAfter: number, options: RequestOptions, octokit: Octokit) => {
				octokit.log.warn(
					`Request quota exhausted for request ${options.request} ${options.url}`
				);

				if (options.request?.retryCount === 0) {
					octokit.log.info(`Retrying request after ${retryAfter} seconds`);

					return true;
				}

				return false;
			},
			onAbuseLimit: (__: number, options: RequestOptions, octokit: Octokit) => {
				octokit.log.warn(
					`Abuse limit exceeded for request ${options.request} ${options.url}`
				);
			},
			id: "makepurple",
			Bottleneck
		}
	});

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	public graphql(accessToken: string = process.env.GITHUB_ACCESS_TOKEN!) {
		return <TResult = any, TVariables extends Record<string, unknown> = any>(
			strings: TemplateStringsArray,
			...exprs: any[]
		) => {
			const query = oneLine(strings, ...exprs);
			const auth = createTokenAuth(accessToken)();

			return async (variables?: TVariables): Promise<TResult> => {
				const { token } = await auth;

				const response = await this.instance.graphql<TResult>({
					query,
					...variables,
					headers: {
						Authorization: `token ${token}`
					}
				});

				return response;
			};
		};
	}
}
