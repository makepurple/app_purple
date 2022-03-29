import { Skill } from "../../generated";
import { GitHubRepository_fragment_mock } from "./GitHubRepository.fragment.mock";

export const Skill_fragment_mock: Omit<Skill, "github"> & {
	github: typeof GitHubRepository_fragment_mock;
} = {
	__typename: "Skill",
	id: "0",
	codeExamples: {
		__typename: "CodeExampleConnection",
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
	followers: {
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
	followersCount: 0,
	github: GitHubRepository_fragment_mock,
	posts: {
		__typename: "PostConnection",
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
	viewerDesiredSkill: false,
	viewerFollowing: true,
	viewerSkill: false
};
