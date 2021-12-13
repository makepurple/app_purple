import graphqlDepthLimit from "graphql-depth-limit";

export const depthLimit = (maxDepth: number = Infinity) => graphqlDepthLimit(maxDepth);
