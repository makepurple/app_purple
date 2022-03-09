import { ApolloServer } from "apollo-server-micro";
import type { GraphQLSchema } from "graphql";
import type { NextApiRequest, NextApiResponse } from "next";
import { getPlugins } from "./plugins";
import { getValidationRules } from "./validation-rules";

const isProd: boolean = process.env.NODE_ENV === "production";

interface ContextFunctionParams {
	req: NextApiRequest;
	res: NextApiResponse;
}

type ContextFunction = (params: ContextFunctionParams) => MaybePromise<Record<string, any>>;

export interface GetApolloServerConfig {
	schema: GraphQLSchema;
	context?: Record<string, any> | ContextFunction;
	maxDepth?: number;
}

export const getApolloServer = (config: GetApolloServerConfig): ApolloServer => {
	const { schema, context = {}, maxDepth = Infinity } = config;

	const server = new ApolloServer({
		context,
		dataSources: () => ({}),
		debug: !isProd,
		introspection: !isProd,
		plugins: getPlugins(),
		schema,
		validationRules: getValidationRules({ maxDepth }),
		formatError: (err) => {
			if (process.env.NODE_ENV === "development") {
				// eslint-disable-next-line no-console
				console.error(err);
				console.error(err.extensions.exception.stacktrace);
			}

			return err;
		}
	});

	return server;
};
