import { objectType } from "nexus";

export const Repository = objectType({
	name: "Repository",
	definition: (t) => {
		t.implements("WithGitHubRepository");
		t.implements("Node");
		t.nonNull.list.nonNull.field("skills", {
			type: "Skill",
			resolve: async ({ id }, args, { prisma }) => {
				return await prisma.repository
					.findUnique({ where: { id } })
					.skills({ select: { skill: true } })
					.then((skills) => skills.map((s) => s.skill));
			}
		});
		t.nonNull.field("user", {
			type: "User",
			resolve: (parent, args, { prisma }) => {
				return prisma.user.findUniqueOrThrow({
					where: {
						name: parent.owner
					}
				});
			}
		});
	}
});
