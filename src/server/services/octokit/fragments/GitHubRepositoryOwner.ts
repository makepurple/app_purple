import { gql } from "@/server/services/octokit/gql";

export const GitHubRepositoryOwner = gql`
	fragment GitHubRepositoryOwner on RepositoryOwner {
		__typename
		avatarUrl
		id
		login
		url
	}
`;
