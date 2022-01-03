import type { Prisma } from "@prisma/client";

const names: readonly string[] = [
	"algolia",
	"apollographql",
	"blender",
	"cloudera",
	"facebook",
	"FormidableLabs",
	"graphql",
	"graphql-nexus",
	"inkscape",
	"lerna",
	"mongodb",
	"postgres",
	"prisma",
	"redis",
	"reduxjs",
	"storybookjs",
	"stripe",
	"styled-components",
	"tailwindlabs",
	"vercel"
];

export const organizations: readonly Prisma.OrganizationCreateInput[] = names.map((name, i) => ({
	id: `Organization_${i}`,
	name
}));
