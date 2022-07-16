import { objectType } from "nexus";

export const NotificationCodeExampleCommented = objectType({
	name: "NotificationCodeExampleCommented",
	definition: (t) => {
		t.implements("Notification");
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
