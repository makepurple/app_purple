import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { getApolloServer, makeContext, schema } from "@makepurple/server";
import { processRequest } from "graphql-upload";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export const config = {
	api: {
		bodyParser: false,
		externalResolver: true
	}
};

const server = getApolloServer({
	schema,
	context: makeContext
});

const startServer = server.start();

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
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

	return startServerAndCreateNextHandler(server, {
		context: (_req, _res) => makeContext({ req: _req, res: _res })
	})(req, res);
};

export default handler;
