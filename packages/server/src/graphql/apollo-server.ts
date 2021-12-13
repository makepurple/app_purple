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
	maxComplexity?: number;
	maxDepth?: number;
}

export const getApolloServer = (config: GetApolloServerConfig): ApolloServer => {
	const { schema, context = {}, maxComplexity = Infinity, maxDepth = Infinity } = config;

	const server = new ApolloServer({
		context,
		dataSources: () => ({}),
		debug: !isProd,
		introspection: !isProd,
		playground: !isProd,
		plugins: getPlugins({ schema, maxComplexity }),
		schema,
		validationRules: getValidationRules({ maxDepth })
	});

	return server;
};
