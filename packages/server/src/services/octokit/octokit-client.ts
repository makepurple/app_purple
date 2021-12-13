import { ObjectUtils } from "@makepurple/utils";
import { createTokenAuth } from "@octokit/auth-token";
import { Octokit } from "@octokit/core";
import { throttling } from "@octokit/plugin-throttling";
import type { RequestOptions } from "@octokit/types";
import Bottleneck from "bottleneck";
import { oneLine } from "common-tags";
import { redis } from "../../redis";
import { Logger } from "../../utils";

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

	public graphql(accessToken?: Maybe<string>) {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const _accessToken = accessToken ?? process.env.GITHUB_ACCESS_TOKEN!;

		return <TResult = any, TVariables extends Record<string, unknown> = any>(
			strings: TemplateStringsArray,
			...exprs: any[]
		) => {
			const query = oneLine(strings, ...exprs);
			const auth = createTokenAuth(_accessToken)();

			const op = async (variables?: TVariables): Promise<TResult> => {
				const { token } = await auth;

				const response = await this.instance.graphql<TResult>(query, {
					...variables,
					headers: {
						Authorization: `token ${token}`
					}
				});

				return response;
			};

			return ObjectUtils.setStatic(op, {
				/**
				 * !HACK
				 * @description Optionally type-cast the result after defining the query, so that
				 * we get VSCode syntax highlighting for GraphQL
				 * @author David Lee
				 * @date October 23, 2021
				 */
				cast: <TCastResult = any, TCastVariables extends Record<string, unknown> = any>(
					variables?: TCastVariables
				): Promise<TCastResult> => op(variables as any) as any
			});
		};
	}
}
