import { Strategy as GitHubStrategy } from "passport-github2";

export const githubStrategy = new GitHubStrategy(
	{
		/* eslint-disable @typescript-eslint/no-non-null-assertion */
		clientID: process.env.GITHUB_CLIENT_ID!,
		clientSecret: process.env.GITHUB_CLIENT_SECRET!,
		callbackURL: process.env.GITHUB_AUTH_CALLBACK!
		/* eslint-enable @typescript-eslint/no-non-null-assertion */
	},
	(...[, , profile, done]) => {
		/* eslint-disable @typescript-eslint/no-unsafe-call */
		done(undefined, {
			...profile,
			provider: "github"
		});
		/* eslint-enable @typescript-eslint/no-unsafe-call */
	}
);
