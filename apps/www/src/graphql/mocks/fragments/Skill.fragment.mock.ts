import { Skill } from "../../generated";
import { GitHubRepository_fragment_mock } from "./GitHubRepository.fragment.mock";

export const Skill_fragment_mock: Skill = {
	__typename: "Skill",
	id: "0",
	desiringUsers: {
		__typename: "UserConnection",
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		},
		totalCount: 0,
		edges: [],
		nodes: []
	},
	github: GitHubRepository_fragment_mock,
	name: "react",
	owner: "facebook",
	users: {
		__typename: "UserConnection",
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		},
		totalCount: 0,
		edges: [],
		nodes: []
	},
	viewerFollowing: true
};