import { dayjs } from "@makepurple/utils";
import { GitHubRepository } from "../../generated";

export const GitHubRepository_fragment_mock: GitHubRepository = {
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
	owner: {
		...({ __typename: "GitHubOrganization" } as any),
		avatarUrl: "https://avatars.githubusercontent.com/u/69631?v=4",
		id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
		login: "facebook",
		twitterUsername: "MetaOpenSource",
		url: "https://github.com/facebook",
		websiteUrl: "https://opensource.fb.com"
	},
	primaryLanguage: {
		__typename: "GitHubLanguage",
		color: "#f1e05a",
		id: "MDg6TGFuZ3VhZ2UxNDA=",
		name: "JavaScript"
	},
	pullRequestCount: 12,
	pushedAt: dayjs("2021-12-24T06:57:42Z").toDate(),
	repository: null,
	stargazerCount: 179641,
	url: "https://github.com/facebook/react"
};
