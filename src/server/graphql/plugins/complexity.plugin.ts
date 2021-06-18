import { ComplexityError } from "@/server/utils";
import type { ApolloServerPlugin } from "apollo-server-plugin-base";
import { DocumentNode, GraphQLSchema, separateOperations } from "graphql";
import {
	ComplexityEstimator,
	fieldExtensionsEstimator,
	getComplexity,
	simpleEstimator
} from "graphql-query-complexity";

interface ComplexityPluginParams {
	maxComplexity?: number;
	schema: GraphQLSchema;
}

export const complexityPlugin = ({
	maxComplexity = Infinity,
	schema
}: ComplexityPluginParams): ApolloServerPlugin => ({
	requestDidStart: () => ({
		didResolveOperation: ({ request: { operationName, variables = {} }, document }) => {
			const query: DocumentNode = operationName
				? separateOperations(document)[operationName]
				: document;

			const estimators: ComplexityEstimator[] = [
				fieldExtensionsEstimator(),
				simpleEstimator({ defaultComplexity: 1 })
			];

			const complexity: number = getComplexity({ estimators, query, schema, variables });

			if (complexity >= maxComplexity) {
				throw new ComplexityError(
					`Query (${complexity}) exceeds the max allowed complexity (${maxComplexity})`
				);
			}
		}
	})
});
