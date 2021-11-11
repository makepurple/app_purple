import { gql } from "@/server/services/octokit/gql";
import { GitHubUser } from ".";

export const GitHubRepository = gql`
	fragment GitHubRepository on Repository {
		id
		description
		name
		owner {
			id
			login
			...GitHubUser
		}
	}
	${GitHubUser}
`;
