import { createServer } from "@graphql-yoga/node";
import { makeContext } from "@makepurple/server/graphql/makeContext";
import { schema } from "@makepurple/server/graphql/nexus/schema";

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
