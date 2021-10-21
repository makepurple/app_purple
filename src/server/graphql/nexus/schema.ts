import { ServerContext } from "@/server/graphql/context";
import { redis } from "@/server/redis";
import { AuthorizationError } from "@/server/utils";
import { oneLine } from "common-tags";
import { RedisStore } from "graphql-rate-limit";
import { fieldAuthorizePlugin, makeSchema, queryComplexityPlugin } from "nexus";
import path from "path";
import { getClientIp } from "request-ip";
import * as mutations from "./mutations";
import { rateLimitPlugin } from "./plugins";
import * as queries from "./queries";
import * as types from "./types";

const dirname: string = process.env.PROJECT_DIRNAME
	? path.join(process.env.PROJECT_DIRNAME, "src/server/graphql/nexus")
	: __dirname;

const getPath = (fileName: string): string => path.join(dirname, fileName);

const isGenerateScript: boolean = process.argv.includes("--nexus-exit");

export const schema = makeSchema({
	shouldGenerateArtifacts: isGenerateScript,
	shouldExitAfterGenerateArtifacts: isGenerateScript,
	types: { ...mutations, ...queries, ...types },
	outputs: {
		schema: getPath("generated/schema.gen.graphql"),
		typegen: getPath("generated/typegen.gen.ts")
	},
	features: {
		abstractTypeStrategies: {
			resolveType: false,
			isTypeOf: false,
			__typename: true
		}
	},
	nonNullDefaults: {
		input: false,
		output: false
	},
	plugins: [
		fieldAuthorizePlugin({
			formatError: () => new AuthorizationError("Not authorized")
		}),
		queryComplexityPlugin(),
		rateLimitPlugin({
			defaultRateLimit: { max: 60, window: "1s" },
			identifyContext: ({ user, req }: ServerContext): string => {
				const userId: Maybe<string> = user?.id;
				const ip: Maybe<string> = getClientIp(req);

				const identityKey: number | string = userId ?? ip ?? "";

				return identityKey.toString();
			},
			store: new RedisStore(redis.instance)
		})
	],
	sourceTypes: {
		headers: [
			oneLine`
				import type { FileUpload } from "@apollographql/graphql-upload-8-fork";
			`
		],
		modules: [],
		mapping: {
			DateTime: "Date",
			URL: "string"
		}
	},
	contextType: {
		module: "@/server/graphql/context",
		export: "ServerContext",
		alias: "ctx"
	}
});
