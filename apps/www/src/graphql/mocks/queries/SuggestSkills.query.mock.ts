import { SuggestSkillsQuery, SuggestSkillsQueryVariables } from "../../generated";

export const SuggestSkills_mock: SuggestSkillsQuery = {
	__typename: "Query",
	suggestSkills: {
		__typename: "SuggestSkills",
		nodes: [
			{
				__typename: "GitHubRepository",
				id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
				name: "react",
				owner: {
					__typename: "GitHubUser",
					id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
					login: "facebook"
				}
			},
			{
				__typename: "GitHubRepository",
				id: "MDEwOlJlcG9zaXRvcnkyOTAyODc3NQ==",
				name: "react-native",
				owner: {
					__typename: "GitHubUser",
					id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
					login: "facebook"
				}
			},
			{
				__typename: "GitHubRepository",
				id: "MDEwOlJlcG9zaXRvcnk2MzUzNzI0OQ==",
				name: "create-react-app",
				owner: {
					__typename: "GitHubUser",
					id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
					login: "facebook"
				}
			},
			{
				__typename: "GitHubRepository",
				id: "MDEwOlJlcG9zaXRvcnkxMjYwMTM3NA==",
				name: "react-devtools",
				owner: {
					__typename: "GitHubUser",
					id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
					login: "facebook"
				}
			},
			{
				__typename: "GitHubRepository",
				id: "MDEwOlJlcG9zaXRvcnkxMDkwNTkzMDQ=",
				name: "react-native-website",
				owner: {
					__typename: "GitHubUser",
					id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
					login: "facebook"
				}
			}
		],
		totalCount: 5
	}
};

export const SuggestSkills_variables_mock: SuggestSkillsQueryVariables = {
	where: {
		name: "react",
		owner: "facebook"
	}
};
