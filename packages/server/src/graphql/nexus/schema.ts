import { oneLine } from "common-tags";
import { RedisStore } from "graphql-rate-limit";
import { fieldAuthorizePlugin, makeSchema, queryComplexityPlugin } from "nexus";
import path from "path";
import { getClientIp } from "request-ip";
import { redis } from "../../redis";
import { AuthorizationError } from "../../utils";
import { ServerContext } from "../context";
import * as inputTypes from "./input-types";
import * as mutations from "./mutations";
import { rateLimitPlugin } from "./plugins";
import * as queries from "./queries";
import * as types from "./types";

const isGenerateScript: boolean = process.argv.includes("--nexus-exit");

export const schema = makeSchema({
	shouldGenerateArtifacts: isGenerateScript,
	shouldExitAfterGenerateArtifacts: isGenerateScript,
	types: { ...inputTypes, ...mutations, ...queries, ...types },
	outputs: {
		schema: path.resolve(__dirname, "./generated/schema.gen.graphql"),
		typegen: path.resolve(__dirname, "./generated/typegen.gen.d.ts")
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
		module: path.resolve(__dirname, "../context.ts"),
		export: "ServerContext",
		alias: "ctx"
	}
});
