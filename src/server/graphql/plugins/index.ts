import { GraphQLSchema } from "graphql";
import { complexityPlugin } from "./complexity.plugin";

interface GetPluginsParams {
	maxComplexity?: number;
	schema: GraphQLSchema;
}

export const getPlugins = (params: GetPluginsParams) => {
	const { maxComplexity = Infinity, schema } = params;

	const plugins = [complexityPlugin({ maxComplexity, schema })];

	return plugins;
};
