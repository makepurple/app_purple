import { gql } from "../gql";

export const GitHubOrganization = gql`
	fragment GitHubOrganization on Organization {
		__typename
		avatarUrl
		description
		id
		login
		name
		twitterUsername
		url
		websiteUrl
	}
`;
