import { dayjs } from "@makepurple/utils";
import { GitHubOrganization, GitHubRepository, GitHubUser } from "../../generated";
import { GitHubOrganization_fragment_mock } from "./GitHubOrganization.fragment.mock";

export const GitHubRepository_fragment_mock: Omit<GitHubRepository, "owner"> & {
	owner: GitHubOrganization | GitHubUser;
} = {
	__typename: "GitHubRepository",
	id: "0",
	description:
		"A declarative, efficient, and flexible JavaScript library for building user interfaces.",
	forkCount: 36455,
	issueCount: 123,
	licenseInfo: {
		__typename: "GitHubLicense",
		id: "0",
		name: "MIT License",
		nickname: null,
		spdxId: "MIT",
		url: "http://choosealicense.com/licenses/mit/"
	},
	name: "react",
	owner: GitHubOrganization_fragment_mock,
	primaryLanguage: {
		__typename: "GitHubLanguage",
		color: "#f1e05a",
		id: "MDg6TGFuZ3VhZ2UxNDA=",
		name: "JavaScript"
	},
	pullRequestCount: 12,
	pushedAt: dayjs("2021-12-24T06:57:42Z").toDate(),
	repository: null,
	skill: null,
	stargazerCount: 179641,
	url: "https://github.com/facebook/react"
};
