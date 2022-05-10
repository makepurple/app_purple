import { gql } from "../gql";
import { GitHubLanguage } from "./GitHubLanguage";
import { GitHubLicense } from "./GitHubLicense";
import { GitHubOrganization } from "./GitHubOrganization";
import { GitHubRepositoryOwner } from "./GitHubRepositoryOwner";
import { GitHubUser } from "./GitHubUser";

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
			... on Organization {
				...GitHubOrganization
			}
			... on User {
				...GitHubUser
			}
		}
		primaryLanguage {
			...GitHubLanguage
		}
		pushedAt
		stargazerCount
		url
		_issueCount: issues(first: 0) {
			totalCount
		}
		_pullRequestCount: pullRequests(first: 0) {
			totalCount
		}
	}
	${GitHubLanguage}
	${GitHubLicense}
	${GitHubOrganization}
	${GitHubRepositoryOwner}
	${GitHubUser}
`;
