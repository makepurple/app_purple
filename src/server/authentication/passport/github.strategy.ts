import { Strategy as GitHubStrategy } from "passport-github2";

export const githubStrategy = new GitHubStrategy(
	{
		clientID: process.env.GITHUB_CLIENT_ID!,
		clientSecret: process.env.GITHUB_CLIENT_SECRET!,
		callbackURL: process.env.GITHUB_AUTH_CALLBACK!
	},
	(...[, , profile, done]) => {
		done(undefined, {
			...profile,
			provider: "github"
		});
	}
);
