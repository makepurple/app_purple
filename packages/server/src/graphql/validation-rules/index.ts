import { ValidationContext } from "graphql";
import { depthLimit } from "./depth-limit";

interface GetValidationRulesParams {
	maxDepth?: number;
}

export const getValidationRules = (params: GetValidationRulesParams) => {
	const { maxDepth } = params;

	const validationRules: ((context: ValidationContext) => any)[] = [depthLimit(maxDepth)];

	return validationRules;
};
