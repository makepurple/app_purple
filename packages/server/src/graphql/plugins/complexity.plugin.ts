import { DocumentNode, GraphQLSchema, separateOperations } from "graphql";
import {
	ComplexityEstimator,
	fieldExtensionsEstimator,
	getComplexity,
	simpleEstimator
} from "graphql-query-complexity";
import { ComplexityError } from "../../utils";
import type { ApolloServerPlugin } from "./types";

interface ComplexityPluginParams {
	maxComplexity?: number;
	schema: GraphQLSchema;
}

export const complexityPlugin = ({
	maxComplexity = Infinity,
	schema
}: ComplexityPluginParams): ApolloServerPlugin => ({
	requestDidStart: () => ({
		didResolveOperation: async ({ request: { operationName, variables = {} }, document }) => {
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

			await Promise.resolve();
		}
	})
});
