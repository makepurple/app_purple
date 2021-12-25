import type { User } from "../../../graphql/generated";
import { GitHubUser_fragment_mock } from "./GitHubUser.fragment.mock";

export const User_fragment_mock: User = {
	__typename: "User" as const,
	comments: [],
	desiredSkills: ["PostgreSQL", "Kubernetes", "Terraform", "Blender", "Inkscape"].map(
		(skill, i) => ({
			__typename: "Skill",
			id: i,
			name: skill,
			owner: "github",
			users: [],
			desiringUsers: []
		})
	),
	email: "lee.david.cs@test.com",
	experiences: [],
	github: GitHubUser_fragment_mock,
	githubUrl: "https://github.com/leedavidcs",
	id: "0",
	image: "https://avatars.githubusercontent.com/u/15151154?v=4",
	name: "leedavidcs",
	posts: [],
	repositories: [],
	skills: [
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
		id: i,
		name: skill,
		owner: "github",
		users: [],
		desiringUsers: []
	})),
	upvotedPosts: []
};