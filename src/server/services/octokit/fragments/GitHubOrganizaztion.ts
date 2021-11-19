import { gql } from "@/server/services/octokit/gql";

export const GitHubOrganization = gql`
	fragment GitHubOrganization on Organization {
		__typename
		avatarUrl
		description
		id
		login
		name
		url
	}
`;
