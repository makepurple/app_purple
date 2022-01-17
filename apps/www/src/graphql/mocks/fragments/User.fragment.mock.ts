import { dayjs } from "@makepurple/utils";
import type { User } from "../../generated";
import { GitHubUser_fragment_mock } from "./GitHubUser.fragment.mock";
import { Skill_fragment_mock } from "./Skill.fragment.mock";

const desiredSkills = ["PostgreSQL", "Kubernetes", "Terraform", "Blender", "Inkscape"].map(
	(skill, i) => ({
		...Skill_fragment_mock,
		id: `DesiredSkill_${i}`,
		name: skill,
		owner: "github"
	})
);

const skills = [
	"Next.js",
	"Prisma",
	"Nexus",
	"Urql",
	"TypeScript",
	"Storybook",
	"Figma",
	"Framer-Motion"
].map((skill, i) => ({
	...Skill_fragment_mock,
	id: `Skill_${i}`,
	name: skill,
	owner: "github"
}));

export const User_fragment_mock: User = {
	__typename: "User" as const,
	chats: {
		__typename: "ChatConnection",
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
	description: "I learn things and work on MakePurple",
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
		edges: desiredSkills.map((skill) => ({
			__typename: "SkillEdge",
			cursor: skill.id,
			node: skill
		})),
		nodes: desiredSkills
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
		__typename: "FollowConnection",
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
		totalCount: 8,
		edges: skills.map((skill) => ({
			__typename: "SkillEdge",
			cursor: skill.id,
			node: skill
		})),
		nodes: skills
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
	viewerCanFriend: true,
	viewerFollowing: false,
	viewerFriended: false,
	viewerIsFriend: false
};
