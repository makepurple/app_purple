import { SuggestSkillsQuery, SuggestSkillsQueryVariables } from "../../generated";
import { GitHubRepository_fragment_mock, GitHubUser_fragment_mock } from "../fragments";

export const SuggestSkills_mock: SuggestSkillsQuery = {
	__typename: "Query",
	suggestSkills: {
		__typename: "SuggestSkills",
		nodes: [
			{
				...GitHubRepository_fragment_mock,
				__typename: "GitHubRepository",
				id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
				name: "react",
				owner: {
					...GitHubUser_fragment_mock,
					__typename: "GitHubUser",
					id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
					login: "facebook"
				}
			},
			{
				...GitHubRepository_fragment_mock,
				__typename: "GitHubRepository",
				id: "MDEwOlJlcG9zaXRvcnkyOTAyODc3NQ==",
				name: "react-native",
				owner: {
					...GitHubUser_fragment_mock,
					__typename: "GitHubUser",
					id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
					login: "facebook"
				}
			},
			{
				...GitHubRepository_fragment_mock,
				__typename: "GitHubRepository",
				id: "MDEwOlJlcG9zaXRvcnk2MzUzNzI0OQ==",
				name: "create-react-app",
				owner: {
					...GitHubUser_fragment_mock,
					__typename: "GitHubUser",
					id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
					login: "facebook"
				}
			},
			{
				...GitHubRepository_fragment_mock,
				__typename: "GitHubRepository",
				id: "MDEwOlJlcG9zaXRvcnkxMjYwMTM3NA==",
				name: "react-devtools",
				owner: {
					...GitHubUser_fragment_mock,
					__typename: "GitHubUser",
					id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
					login: "facebook"
				}
			},
			{
				...GitHubRepository_fragment_mock,
				__typename: "GitHubRepository",
				id: "MDEwOlJlcG9zaXRvcnkxMDkwNTkzMDQ=",
				name: "react-native-website",
				owner: {
					...GitHubUser_fragment_mock,
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
