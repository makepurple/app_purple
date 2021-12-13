import { Config } from "apollo-server-micro";

export type ApolloServerPlugin = NonNullable<Config["plugins"]>[number];
