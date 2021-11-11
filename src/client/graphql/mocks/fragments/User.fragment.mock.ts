import type { User } from "@/client/graphql/generated";
import { TopLanguages_fragment_mock } from ".";

export const User_fragment_mock: User = {
	__typename: "User" as const,
	id: "0",
	image: "https://avatars.githubusercontent.com/u/15151154?v=4",
	name: "leedavidcs",
	github: {
		__typename: "GitHubUser",
		bio: "I learn things and work on MakePurple",
		company: "Openbase",
		name: "David Lee",
		topLanguages: {
			...TopLanguages_fragment_mock,
			__typename: "TopLanguages"
		},
		twitterUsername: "i3daly",
		url: "https://github.com/leedavidcs",
		websiteUrl: "https://leedavidcs.dev"
	},
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
		name: skill
	})),
	desiredSkills: ["PostgreSQL", "Kubernetes", "Terraform", "Blender", "Inkscape"].map(
		(skill, i) => ({
			__typename: "Skill",
			id: i,
			name: skill
		})
	)
} as any;
