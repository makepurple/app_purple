import { GraphQLSchema } from "graphql";
import { complexityPlugin } from "./complexity.plugin";
import { ApolloServerPlugin } from "./types";

interface GetPluginsParams {
	maxComplexity?: number;
	schema: GraphQLSchema;
}

export const getPlugins = (params: GetPluginsParams): ApolloServerPlugin[] => {
	const { maxComplexity = Infinity, schema } = params;

	const plugins: ApolloServerPlugin[] = [complexityPlugin({ maxComplexity, schema })];

	return plugins;
};
