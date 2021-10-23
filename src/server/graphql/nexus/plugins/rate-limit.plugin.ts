import { RateLimitError } from "@/server/utils";
import { oneLine } from "common-tags";
import { GraphQLResolveInfo } from "graphql";
import { getGraphQLRateLimiter } from "graphql-rate-limit";
import { plugin } from "nexus";
import {
	ArgsValue,
	GetGen,
	MaybePromise,
	printedGenTyping,
	printedGenTypingImport,
	SourceValue
} from "nexus/dist/core";

type GraphQLRateLimitConfig = Parameters<typeof getGraphQLRateLimiter>[0];
type GraphQLRateLimitDirectiveArgs = Parameters<ReturnType<typeof getGraphQLRateLimiter>>[1];

/* eslint-disable no-console */

const fieldRateLimitResolverImport = printedGenTypingImport({
	module: "@/server/graphql/nexus/plugins/rate-limit.plugin",
	bindings: ["FieldRateLimitResolver"]
});

const fieldDefTypes = printedGenTyping({
	optional: true,
	name: "rateLimit",
	description: oneLine`
		Rate limit plugin for an individual field. Uses the same directive args as
		\`graphql-rate-limit\`.
	`,
	type: "FieldRateLimitResolver<TypeName, FieldName>",
	imports: [fieldRateLimitResolverImport]
});

export type FieldRateLimitResolver<TypeName extends string, FieldName extends string> = (
	root: SourceValue<TypeName>,
	args: ArgsValue<TypeName, FieldName>,
	context: GetGen<"context">,
	info: GraphQLResolveInfo
) => MaybePromise<GraphQLRateLimitDirectiveArgs>;

export interface RateLimitPluginConfig extends GraphQLRateLimitConfig {
	defaultRateLimit?: GraphQLRateLimitDirectiveArgs;
}

export const rateLimitPlugin = (options: RateLimitPluginConfig) => {
	const rateLimiter = getGraphQLRateLimiter(options);

	return plugin({
		name: "CustomNexusRateLimit",
		description: "The rateLimit plugin provides field-level rate limiting for a schema",
		fieldDefTypes,
		onCreateFieldResolver: (config) => {
			const rateLimit = config.fieldConfig.extensions?.nexus?.config.rateLimit;

			/**
			 * @description If the field doesn't have a rateLimit field, and no top-level default
			 *     was configured on the schema, don't worry about wrapping the resolver
			 */
			if (rateLimit == null && !options.defaultRateLimit) {
				return;
			}

			if (rateLimit && typeof rateLimit !== "function") {
				console.error(
					new Error(
						`The rateLimit property provided to ${config.fieldConfig.name} with type ${
							config.fieldConfig.type
						} should be a function, saw ${typeof rateLimit}`
					)
				);

				return;
			}

			return async (parent, args, context, info, next) => {
				const rateLimitArgs: GraphQLRateLimitDirectiveArgs =
					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					rateLimit?.(parent, args, context, info) ?? options.defaultRateLimit!;

				const errorMessage: Maybe<string> = await rateLimiter(
					{ parent, args, context, info },
					rateLimitArgs
				);

				if (errorMessage) {
					throw new RateLimitError(errorMessage);
				}

				return next(parent, args, context, info);
			};
		}
	});
};
