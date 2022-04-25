import { OctokitClient } from "./octokit-client";

export * from "./fragments";
export * from "./generated";

export type { DeepGitHubType, OctokitClient } from "./octokit-client";

// Make global.cachedOctokit work with TypeScript
declare global {
	// NOTE: This actually needs to be a "var", let/const don't work here.
	// eslint-disable-next-line no-var
	var cachedOctokit: OctokitClient;
}

// Workaround to prevent opening more connections with Octokit (such as Redis)
export const client = global.cachedOctokit ?? new OctokitClient();

if (process.env.NODE_ENV !== "production") {
	global.cachedOctokit = client;
}
