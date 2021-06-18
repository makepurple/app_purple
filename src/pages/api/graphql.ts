import { createContext, getApolloServer, schema } from "@/server/graphql";
import { apiBaseMiddleware, Request } from "@/server/middlewares";
import { ApolloServer } from "apollo-server-micro";
import { NextApiResponse } from "next";

export const config = {
	api: { bodyParser: false }
};

const handler = async (req: Request, res: NextApiResponse) => {
	const server: ApolloServer = getApolloServer({
		schema,
		context: createContext,
		maxComplexity: 500,
		maxDepth: 10
	});

	const graphqlHandler = apiBaseMiddleware().use(
		server.createHandler({
			path: "/api/graphql"
		})
	);

	return await graphqlHandler(req, res);
};

export default handler;
