import { createContext, getApolloServer, schema } from "@/server/graphql";
import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
	api: { bodyParser: false }
};

const server: ApolloServer = getApolloServer({
	schema,
	context: createContext,
	maxComplexity: 500,
	maxDepth: 10
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const graphqlHandler = server.createHandler({
		path: "/api/graphql"
	});

	return await graphqlHandler(req, res);
};

export default handler;
