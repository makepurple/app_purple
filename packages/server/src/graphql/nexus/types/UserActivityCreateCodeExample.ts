import { objectType } from "nexus";

export const UserActivityCreateCodeExample = objectType({
	name: "UserActivityCreateCodeExample",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("codeExample", {
			type: "CodeExample",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.codeExample.findUnique({
					where: { id: parent.codeExampleId },
					rejectOnNotFound: true
				});
			}
		});
		t.nonNull.string("codeExampleId");
	}
});
