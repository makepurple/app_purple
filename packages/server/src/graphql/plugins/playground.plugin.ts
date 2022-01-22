import {
	ApolloServerPluginLandingPageDisabled,
	ApolloServerPluginLandingPageGraphQLPlayground
} from "apollo-server-core";
import { ApolloServerPlugin } from "./types";

export const playgroundPlugin = (): ApolloServerPlugin =>
	process.env.NODE_ENV === "development"
		? ApolloServerPluginLandingPageGraphQLPlayground()
		: ApolloServerPluginLandingPageDisabled();
