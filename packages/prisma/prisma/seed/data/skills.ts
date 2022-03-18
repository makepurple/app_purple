import type { Prisma } from "@prisma/client";

const names: readonly [name: string, owner: string][] = [
	["algoliasearch-client-javascript", "algolia"],
	["apollo-client", "apollographql"],
	["apollo-server", "apollographql"],
	["blender", "blender"],
	["react", "facebook"],
	["react-native", "facebook"],
	["urql", "FormidableLabs"],
	["graphql-js", "graphql"],
	["nexus", "graphql-nexus"],
	["inkscape", "inkscape"],
	["lerna", "lerna"],
	["mongo", "mongodb"],
	["postgres", "postgres"],
	["prisma", "prisma"],
	["redis", "redis"],
	["redux", "reduxjs"],
	["storybook", "storybookjs"],
	["stripe-js", "stripe"],
	["styled-components", "styled-components"],
	["tailwindcss", "tailwindlabs"],
	["next.js", "vercel"]
];

export const skills: readonly Prisma.SkillCreateInput[] = names.map(([name, owner], i) => ({
	id: `Skill_${i}`,
	name,
	organization: {
		connect: { name: owner }
	}
}));
