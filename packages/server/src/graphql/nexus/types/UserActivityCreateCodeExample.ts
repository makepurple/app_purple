import { objectType } from "nexus";

export const UserActivityCreateCodeExample = objectType({
	name: "UserActivityCreateCodeExample",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("codeExample", {
			type: "CodeExample",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.codeExample.findUniqueOrThrow({
					where: { id: parent.codeExampleId }
				});
			}
		});
		t.nonNull.string("codeExampleId");
	}
});
