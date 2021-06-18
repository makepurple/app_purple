import { ValidationContext } from "graphql";
import { depthLimitValidationRule } from "./depth-limit.validation-rule";

interface GetValidationRulesParams {
	maxDepth?: number;
}

export const getValidationRules = (params: GetValidationRulesParams) => {
	const { maxDepth } = params;

	const validationRules: ((context: ValidationContext) => any)[] = [
		depthLimitValidationRule(maxDepth)
	];

	return validationRules;
};
