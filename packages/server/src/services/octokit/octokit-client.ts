import { createBatchingExecutor } from "@graphql-tools/batch-execute";
import type { ExecutionRequest, ExecutionResult, Executor } from "@graphql-tools/utils";
import { LangUtils, ObjectUtils } from "@makepurple/utils";
import { createTokenAuth } from "@octokit/auth-token";
import { Octokit } from "@octokit/core";
import { throttling } from "@octokit/plugin-throttling";
import type { RequestOptions } from "@octokit/types";
import { oneLine } from "common-tags";
import { parse, print } from "graphql";

export declare type DeepGitHubType<T> = T extends { __typename?: infer U }
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
			id: "makepurple"
		}
	});

	public async graphql(accessToken?: Maybe<string>) {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const _accessToken = accessToken ?? process.env.GITHUB_ACCESS_TOKEN!;
		const { token } = await createTokenAuth(_accessToken)();

		const executor: Executor<any, any> = async (
			request: ExecutionRequest<any, any>
		): Promise<ExecutionResult<any>> => {
			const { document, variables } = request;
			const query = print(document);

			const data = await this.instance.graphql<Record<string, any>>(query, {
				...variables,
				headers: {
					Authorization: `token ${token}`
				}
			});

			return { data };
		};

		const batchExecutor = createBatchingExecutor(executor);

		return <
			TResult extends Record<string, any> = any,
			TVariables extends Record<string, unknown> = any
		>(
			strings: TemplateStringsArray,
			...exprs: any[]
		) => {
			const query = parse(oneLine(strings, ...exprs));

			const op = async (variables?: TVariables): Promise<DeepGitHubType<TResult>> => {
				const { data } = (await batchExecutor<TResult>({
					document: query,
					variables
				})) as ExecutionResult<TResult>;

				return OctokitClient.castTypenames(data as TResult);
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

	private static castTypenames<T extends Record<string, any>>(input: T): DeepGitHubType<T> {
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
}
