import { dayjs } from "@makepurple/utils";
import type { User } from "../../generated";
import { GitHubUser_fragment_mock } from "./GitHubUser.fragment.mock";

export const User_fragment_mock: User = {
	__typename: "User" as const,
	comments: {
		__typename: "CommentConnection",
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
	createdAt: dayjs(1318781876406).toDate(),
	desiredSkills: {
		__typename: "SkillConnection",
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		},
		totalCount: 5,
		edges: [],
		nodes: ["PostgreSQL", "Kubernetes", "Terraform", "Blender", "Inkscape"].map((skill, i) => ({
			__typename: "Skill",
			id: `DesiredSkill_${i}`,
			name: skill,
			owner: "github",
			users: [],
			desiringUsers: []
		}))
	},
	email: "lee.david.cs@test.com",
	experiences: [],
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
	following: {
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
	friendRequests: {
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
	friends: {
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
	github: GitHubUser_fragment_mock,
	githubUrl: "https://github.com/leedavidcs",
	id: "0",
	image: "https://avatars.githubusercontent.com/u/15151154?v=4",
	name: "leedavidcs",
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
	repositories: [],
	skills: {
		__typename: "SkillConnection",
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		},
		totalCount: 5,
		edges: [],
		nodes: [
			"Next.js",
			"Prisma",
			"Nexus",
			"Urql",
			"TypeScript",
			"Storybook",
			"Figma",
			"Framer-Motion"
		].map((skill, i) => ({
			__typename: "Skill",
			id: `Skill_${i}`,
			name: skill,
			owner: "github",
			users: [],
			desiringUsers: []
		}))
	},
	upvotedPosts: {
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
	viewerFollowing: false
};
