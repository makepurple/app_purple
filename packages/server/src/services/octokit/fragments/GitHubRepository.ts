import { gql } from "../gql";
import { GitHubLanguage } from "./GitHubLanguage";
import { GitHubLicense } from "./GitHubLicense";
import { GitHubRepositoryOwner } from "./GitHubRepositoryOwner";

export const GitHubRepository = gql`
	fragment GitHubRepository on Repository {
		__typename
		id
		description
		forkCount
		licenseInfo {
			__typename
			id
			...GitHubLicense
		}
		name
		owner {
			__typename
			id
			...GitHubRepositoryOwner
		}
		primaryLanguage {
			...GitHubLanguage
		}
		pushedAt
		stargazerCount
		url
	}
	${GitHubLanguage}
	${GitHubLicense}
	${GitHubRepositoryOwner}
`;
