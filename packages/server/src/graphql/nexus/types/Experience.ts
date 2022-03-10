import { objectType } from "nexus";

export const Experience = objectType({
	name: "Experience",
	definition: (t) => {
		t.dateTime("endDate");
		t.nonNull.list.nonNull.string("highlights");
		t.nonNull.id("id");
		t.string("location");
		t.nonNull.field("organization", {
			type: "Organization",
			resolve: (parent, args, { prisma }) => {
				return prisma.organization.findUnique({
					where: {
						name: parent.organizationName
					},
					rejectOnNotFound: true
				});
			}
		});
		t.nonNull.string("organizationName");
		t.nonNull.string("positionName");
		t.nonNull.dateTime("startDate");
		t.field("type", { type: "ExperienceType" });
		t.nonNull.field("user", {
			type: "User",
			resolve: (parent, args, { prisma }) => {
				return prisma.user.findUnique({
					where: {
						id: parent.userId
					},
					rejectOnNotFound: true
				});
			}
		});
		t.nonNull.string("userId");
	}
});
