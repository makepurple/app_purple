import { OctokitClient } from "./octokit-client";

export * from "./fragments";
export * from "./generated";

export type { OctokitClient } from "./octokit-client";

export const client = new OctokitClient();
