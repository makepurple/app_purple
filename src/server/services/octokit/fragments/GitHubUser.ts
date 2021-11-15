import { gql } from "@/server/services/octokit/gql";

export const GitHubUser = gql`
	fragment GitHubUser on User {
		__typename
		id
		bio
		company
		login
		name
		twitterUsername
		url
		websiteUrl
	}
`;
