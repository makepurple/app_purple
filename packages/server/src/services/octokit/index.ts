import { OctokitClient } from "./octokit-client";

export * from "./fragments";
export * from "./generated";

export const client = new OctokitClient();
