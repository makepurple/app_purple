import { createBatchingExecutor } from "@graphql-tools/batch-execute";
import type { ExecutionRequest, ExecutionResult, Executor } from "@graphql-tools/utils";
import { LangUtils, ObjectUtils } from "@makepurple/utils";
import { createTokenAuth } from "@octokit/auth-token";
import { Octokit } from "@octokit/core";
import { throttling } from "@octokit/plugin-throttling";
import type { RequestOptions } from "@octokit/types";
import { oneLine } from "common-tags";
import type { DocumentNode } from "graphql";
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
		const authToken = await this.getAuthToken(accessToken);

		return this.getProxyOperation(authToken);
	}

	private async getAuthToken(accessToken?: Maybe<string>): Promise<string> {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const _accessToken = accessToken ?? process.env.GITHUB_ACCESS_TOKEN!;
		const { token } = await createTokenAuth(_accessToken)();

		return token;
	}

	private getGraphQLExecutor(authToken: string): Executor<any, any> {
		const executor: Executor<any, any> = async (
			request: ExecutionRequest<any, any>
		): Promise<ExecutionResult<any>> => {
			const { document, variables } = request;
			const query = print(document);

			const data = await this.instance.graphql<Record<string, any>>(query, {
				...variables,
				headers: { Authorization: `token ${authToken}` }
			});

			return { data };
		};

		return createBatchingExecutor(executor);
	}

	private getGraphQLOperation<
		TResult extends Record<string, any> = any,
		TVariables extends Record<string, unknown> = any
	>(query: DocumentNode, executor: Executor<any, any>) {
		return async (variables?: TVariables): Promise<DeepGitHubType<TResult>> => {
			const { data } = (await executor<TResult>({
				document: query,
				variables
			})) as ExecutionResult<TResult>;

			return OctokitClient.castTypenames(data as TResult);
		};
	}

	private getCastGraphQLOperation<
		TResult extends Record<string, any> = any,
		TVariables extends Record<string, unknown> = any
	>(operation: (variables?: TResult | undefined) => Promise<DeepGitHubType<TVariables>>) {
		/**
		 * !HACK
		 * @description Optionally type-cast the result after defining the query, so that
		 * we get VSCode syntax highlighting for GraphQL
		 * @author David Lee
		 * @date October 23, 2021
		 */
		return <
			TCastResult extends Record<string, any> = any,
			TCastVariables extends Record<string, unknown> = any
		>(
			variables?: TCastVariables
		): Promise<DeepGitHubType<TCastResult>> => operation(variables as any) as any;
	}

	private getProxyOperation(authToken: string) {
		const executor = this.getGraphQLExecutor(authToken);

		return <
			TResult extends Record<string, any> = any,
			TVariables extends Record<string, unknown> = any
		>(
			strings: TemplateStringsArray,
			...exprs: any[]
		) => {
			const query: DocumentNode = parse(oneLine(strings, ...exprs));
			const operation = this.getGraphQLOperation<TResult, TVariables>(query, executor);

			return ObjectUtils.setStatic(operation, {
				cast: this.getCastGraphQLOperation(operation),
				from: (accessToken?: Maybe<string>) => {
					const altOperation = async (
						variables?: TVariables | undefined
					): Promise<DeepGitHubType<TResult>> => {
						// Get from authToken, fallback to original authToken if missing
						const _authToken = accessToken
							? await this.getAuthToken(accessToken)
							: authToken;
						const altExecutor = this.getGraphQLExecutor(_authToken);

						return this.getGraphQLOperation<TResult, TVariables>(
							query,
							altExecutor
						)(variables);
					};

					return ObjectUtils.setStatic(altOperation, {
						cast: this.getCastGraphQLOperation(altOperation)
					});
				}
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
