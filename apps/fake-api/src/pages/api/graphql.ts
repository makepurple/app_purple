import { ApolloServer } from "apollo-server-micro";
import { GraphQLBoolean, GraphQLObjectType, GraphQLSchema } from "graphql";
import { NextApiRequest, NextApiResponse } from "next";

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

const server = new ApolloServer({
	schema
});

const startServer = server.start();

export const config = {
	api: { bodyParser: false }
};

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	await startServer;

	const graphqlHandler = server.createHandler({
		path: "/api/graphql"
	});

	await graphqlHandler(req, res);
};
