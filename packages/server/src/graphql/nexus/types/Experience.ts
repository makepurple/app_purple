import { objectType } from "nexus";

export const Experience = objectType({
	name: "Experience",
	sourceType: {
		module: "@prisma/client",
		export: "Experience"
	},
	definition: (t) => {
		t.dateTime("endDate");
		t.nonNull.list.nonNull.string("highlights", {
			resolve: (parent) => {
				/**
				 * !HACK
				 * @description The underlying type in the DB is a Json, but we're expecting a
				 * string array. Casting to string[] in the resolver, which may break if the
				 * field ever returns a different data shape
				 * @author David Lee
				 * @date April 3, 2022
				 */
				return parent.highlights as string[];
			}
		});
		t.implements("Node");
		t.string("location");
		t.nonNull.field("organization", {
			type: "Organization",
			resolve: (parent, args, { prisma }) => {
				return prisma.organization.findUniqueOrThrow({
					where: {
						name: parent.organizationName
					}
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
				return prisma.user.findUniqueOrThrow({
					where: {
						id: parent.userId
					}
				});
			}
		});
		t.nonNull.string("userId");
	}
});
