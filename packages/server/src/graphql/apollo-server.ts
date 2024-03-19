import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageDisabled } from "@apollo/server/plugin/disabled";
import type { GraphQLSchema } from "graphql";
import type { NextApiRequest, NextApiResponse } from "next";

const isProd: boolean = process.env.NODE_ENV === "production";

interface ContextFunctionParams {
	req: NextApiRequest;
	res: NextApiResponse;
}

type ContextFunction = (params: ContextFunctionParams) => MaybePromise<Record<string, any>>;

export interface GetApolloServerConfig {
	schema: GraphQLSchema;
	context?: Record<string, any> | ContextFunction;
}

export const getApolloServer = (config: GetApolloServerConfig): ApolloServer => {
	const { schema } = config;

	const server = new ApolloServer({
		introspection: !isProd,
		plugins: [ApolloServerPluginLandingPageDisabled()],
		schema
	});

	return server;
};
