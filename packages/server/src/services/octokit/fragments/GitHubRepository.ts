import { gql } from "../gql";
import { GitHubRepositoryOwner } from "./GitHubRepositoryOwner";

export const GitHubRepository = gql`
	fragment GitHubRepository on Repository {
		__typename
		id
		description
		name
		owner {
			__typename
			id
			...GitHubRepositoryOwner
		}
		url
	}
	${GitHubRepositoryOwner}
`;
