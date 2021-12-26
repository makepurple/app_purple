import { dayjs } from "@makepurple/utils";
import { Repository } from "../../generated";
import { User_fragment_mock } from "./User.fragment.mock";

export const Repository_fragment_mock: Repository = {
	__typename: "Repository",
	id: 0,
	github: {
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
			...({ __typename: "GitHubUser" } as any),
			avatarUrl: "https://avatars.githubusercontent.com/u/69631?v=4",
			id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
			login: "facebook",
			url: "https://github.com/facebook"
		},
		primaryLanguage: {
			__typename: "GitHubLanguage",
			color: "#f1e05a",
			id: "MDg6TGFuZ3VhZ2UxNDA=",
			name: "JavaScript"
		},
		pullRequestCount: 12,
		pushedAt: dayjs("2021-12-24T06:57:42Z").toDate(),
		stargazerCount: 179641,
		url: "https://github.com/facebook/react"
	},
	name: "react",
	skills: [
		{
			__typename: "Skill",
			name: "react",
			id: 0,
			desiringUsers: [],
			users: [],
			owner: "facebook"
		},
		{
			__typename: "Skill",
			name: "typescript",
			id: 1,
			desiringUsers: [],
			users: [],
			owner: "microsoft"
		}
	],
	user: User_fragment_mock,
	owner: User_fragment_mock.name.toString()
};
