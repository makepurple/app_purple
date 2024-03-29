import { dayjs } from "@makepurple/utils";
import { User, UserRole } from "../../generated";
import { GitHubUser_fragment_mock } from "./GitHubUser.fragment.mock";
import { Skill_fragment_mock } from "./Skill.fragment.mock";
import { UserTrophies_fragment_mock } from "./UserTrophies.fragment.mock";

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
	activities: {
		__typename: "UserActivityConnection",
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
	activityFeed: {
		__typename: "UserActivityConnection",
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
	banned: false,
	banReason: null,
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
	commentUpvotes: 0,
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
	experiences: {
		__typename: "ExperienceConnection",
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
	followingCount: 0,
	friendRequestsReceived: {
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
	friendRequestsReceivedCount: 0,
	friendRequestsSent: {
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
	friendsCount: 0,
	github: GitHubUser_fragment_mock,
	githubUrl: "https://github.com/leedavidcs",
	id: "0",
	image: "https://avatars.githubusercontent.com/u/15151154?v=4",
	messagesLastOpenedAt: dayjs(1318781876406).toDate(),
	name: "leedavidcs",
	newMessagesCount: 5,
	newNotificationsCount: 12,
	notifications: {
		__typename: "NotificationConnection",
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
	notificationsLastOpenedAt: dayjs(1318781876406).toDate(),
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
	postUpvotes: 0,
	postViews: 0,
	repositories: {
		__typename: "RepositoryConnection",
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
	role: UserRole.Member,
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
	trophies: UserTrophies_fragment_mock,
	upvotedCodeExamples: {
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
