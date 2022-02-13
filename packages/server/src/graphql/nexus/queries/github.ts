import { nonNull, queryField } from "nexus";

export const github = queryField("github", {
	type: nonNull("GitHub"),
	resolve: () => ({})
});
