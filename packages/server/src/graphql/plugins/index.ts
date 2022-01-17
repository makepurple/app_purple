import { playgroundPlugin } from "./playground.plugin";
import { ApolloServerPlugin } from "./types";

export const getPlugins = (): ApolloServerPlugin[] => {
	const plugins: ApolloServerPlugin[] = [playgroundPlugin()];

	return plugins;
};
