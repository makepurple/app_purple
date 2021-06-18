import depthLimit from "graphql-depth-limit";

export const depthLimitValidationRule = (maxDepth: number = Infinity) => depthLimit(maxDepth);
