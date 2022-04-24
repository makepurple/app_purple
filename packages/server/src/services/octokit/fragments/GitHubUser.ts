import { gql } from "../gql";

export const GitHubUser = gql`
	fragment GitHubUser on User {
		__typename
		id
		avatarUrl
		bio
		company
		login
		name
		twitterUsername
		url
		websiteUrl
		_followerCount: followers(first: 0) {
			totalCount
		}
	}
`;
