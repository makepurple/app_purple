import { LangUtils, ObjectUtils } from "@makepurple/utils";
import { createTokenAuth } from "@octokit/auth-token";
import { Octokit } from "@octokit/core";
import { throttling } from "@octokit/plugin-throttling";
import type { RequestOptions } from "@octokit/types";
import Bottleneck from "bottleneck";
import { oneLine } from "common-tags";
import { redis } from "../../redis";
import { Logger } from "../../utils";

const connection =
	process.env.AS_SCRIPT === "true"
		? null
		: new Bottleneck.IORedisConnection({ client: redis.instance });

connection?.on("error", (err) => {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-call
	Logger.error(err.toString?.());
});

declare type DeepGitHubType<T> = T extends { __typename?: infer U }
	? U extends string
		? { [P in keyof Omit<T, "__typename">]: DeepGitHubType<T[P]> } & {
				__typename: `GitHub${U}`;
		  }
		: never
	: T extends Date
	? Date
	: T extends (infer U)[]
	? DeepGitHubType<U>[]
	: T extends readonly (infer U)[]
	? readonly DeepGitHubType<U>[]
	: T;

export class OctokitClient {
	public instance = new (Octokit.plugin(throttling))({
		throttle: {
			connection: connection ?? undefined,
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
			Bottleneck: process.env.AS_SCRIPT === "true" ? undefined : Bottleneck
		}
	});

	public static castTypenames<T extends Record<string, any>>(input: T): DeepGitHubType<T> {
		if (LangUtils.isNil(input)) return input as any;

		if (Array.isArray(input)) {
			return (input as readonly any[]).map((value) =>
				OctokitClient.castTypenames(value)
			) as DeepGitHubType<T>;
		}

		if (input instanceof Date) return input as DeepGitHubType<T>;

		if (typeof input === "object") {
			const keys = Object.keys(input) as (keyof T)[];

			return keys.reduce((acc, key) => {
				const value = input[key];

				return {
					...acc,
					[key]:
						key === "__typename" ? `GitHub${value}` : OctokitClient.castTypenames(value)
				} as DeepGitHubType<T>;
			}, {} as DeepGitHubType<T>);
		}

		return input as DeepGitHubType<T>;
	}

	public graphql(accessToken?: Maybe<string>) {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const _accessToken = accessToken ?? process.env.GITHUB_ACCESS_TOKEN!;

		return <
			TResult extends Record<string, any> = any,
			TVariables extends Record<string, unknown> = any
		>(
			strings: TemplateStringsArray,
			...exprs: any[]
		) => {
			const query = oneLine(strings, ...exprs);
			const auth = createTokenAuth(_accessToken)();

			const op = async (variables?: TVariables): Promise<DeepGitHubType<TResult>> => {
				const { token } = await auth;

				const response = await this.instance.graphql<TResult>(query, {
					...variables,
					headers: {
						Authorization: `token ${token}`
					}
				});

				return OctokitClient.castTypenames(response);
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
				): Promise<DeepGitHubType<TCastResult>> => op(variables as any) as any
			});
		};
	}
}
