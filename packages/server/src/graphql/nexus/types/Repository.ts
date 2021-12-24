import { NexusPrisma } from "@makepurple/prisma/nexus";
import { objectType } from "nexus";

export const Repository = objectType({
	name: NexusPrisma.Repository.$name,
	description: NexusPrisma.Repository.$description,
	definition: (t) => {
		t.field(NexusPrisma.Repository.id);
		t.field(NexusPrisma.Repository.name);
		t.nonNull.list.nonNull.field("skills", {
			type: "Skill",
			resolve: async ({ id }, args, { prisma }) => {
				return await prisma.repository
					.findUnique({ where: { id } })
					.skills({ select: { skill: true } })
					.then((skills) => skills.map((s) => s.skill));
			}
		});
		t.field(NexusPrisma.Repository.user);
		t.field(NexusPrisma.Repository.userId);
	}
});
