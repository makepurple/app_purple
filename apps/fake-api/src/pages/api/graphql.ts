import { createContext } from "@makepurple/server/graphql/createContext2";
import { ApolloServer } from "apollo-server-micro";
import { GraphQLBoolean, GraphQLObjectType, GraphQLSchema } from "graphql";
import { processRequest } from "graphql-upload";
import Cors from "micro-cors";
import { NextApiRequest, NextApiResponse } from "next";

const cors = Cors();

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
	context: createContext,
	schema
});

const startServer = server.start();

export const config = {
	api: { bodyParser: false }
};

export default cors(async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
	if (req.method === "OPTIONS") {
		res.end();

		return;
	}

	await startServer;

	/**
	 * !HACK
	 * @description Get file uploads to work with ApolloServer 3.0 using
	 * graphql-upload
	 * @see (@link: https://github.com/jaydenseric/graphql-upload/issues/160#issuecomment-822729490)
	 * @author David Lee
	 * @date December 19, 2021
	 */
	const contentType = req.headers["content-type"];

	if (contentType?.startsWith("multipart/form-data")) {
		(req as any).filePayload = await processRequest(req, res);
	}

	const graphqlHandler = server.createHandler({
		path: "/api/graphql"
	});

	await graphqlHandler(req, res);
});
