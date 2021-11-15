import { gql } from "@/server/services/octokit/gql";
import { GitHubUser } from "./GitHubUser";

export const GitHubRepository = gql`
	fragment GitHubRepository on Repository {
		__typename
		id
		description
		name
		owner {
			__typename
			id
			login
			...GitHubUser
		}
	}
	${GitHubUser}
`;
