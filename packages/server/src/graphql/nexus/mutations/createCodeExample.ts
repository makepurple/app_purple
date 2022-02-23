import { arg, mutationField, nonNull } from "nexus";

export const createCodeExample = mutationField("createCodeExample", {
	type: nonNull("CreateCodeExamplePayload"),
	args: {
		data: nonNull(arg({ type: "CodeExampleCreateInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma }) => {}
});
