import { NexusPrisma } from "@makepurple/prisma/nexus";
import { objectType } from "nexus";

export const Skill = objectType({
	name: NexusPrisma.Skill.$name,
	description: NexusPrisma.Skill.$description,
	definition: (t) => {
		t.field(NexusPrisma.Skill.id);
		t.field(NexusPrisma.Skill.name);
		t.field(NexusPrisma.Skill.owner);
		t.nonNull.list.nonNull.field("users", {
			type: "User",
			resolve: async (root, args, { prisma }) => {
				const users = await prisma.skill
					.findUnique({
						where: {
							name_owner: {
								name: root.name,
								owner: root.owner
							}
						}
					})
					.users({ include: { user: true } });

				return users.map(({ user }) => user);
			}
		});
		t.nonNull.list.nonNull.field("desiringUsers", {
			type: "User",
			resolve: async (root, args, { prisma }) => {
				const users = await prisma.skill
					.findUnique({
						where: {
							name_owner: {
								name: root.name,
								owner: root.owner
							}
						}
					})
					.desiringUsers({ include: { user: true } });

				return users.map(({ user }) => user);
			}
		});
	}
});
