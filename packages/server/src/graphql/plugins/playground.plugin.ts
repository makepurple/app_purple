import { ApolloServerPlugin } from "./types";
import {
	ApolloServerPluginLandingPageDisabled,
	ApolloServerPluginLandingPageGraphQLPlayground
} from ".pnpm/apollo-server-core@3.5.0_graphql@15.7.2/node_modules/apollo-server-core";

export const playgroundPlugin = (): ApolloServerPlugin =>
	process.env.NODE_ENV === "development"
		? ApolloServerPluginLandingPageGraphQLPlayground()
		: ApolloServerPluginLandingPageDisabled();
