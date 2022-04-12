import { createServer } from "@graphql-yoga/node";
import { makeContext } from "@makepurple/server/graphql/makeContext";
import { GraphQLBoolean, GraphQLObjectType, GraphQLSchema } from "graphql";

const schema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: "Query",
		fields: {
			ok: {
				type: GraphQLBoolean,
				resolve: () => true
			}
		}
	})
});

const server = createServer({
	context: makeContext,
	schema,
	cors: false,
	endpoint: "/api/graphql"
});

export const config = {
	api: {
		bodyParser: false,
		externalResolver: true
	}
};

export default server;
