import { objectType } from "nexus";
import { Skill as _Skill } from "nexus-prisma";

export const Skill = objectType({
	name: _Skill.$name,
	description: _Skill.$description,
	definition: (t) => {
		t.field(_Skill.id);
		t.field(_Skill.name);
		t.field(_Skill.owner);
		t.nonNull.list.nonNull.field("users", {
			type: "User",
			resolve: async (root, args, { prisma }) => {
				const users = await prisma.skill
					.findUnique({ where: { name: root.name } })
					.users({ include: { user: true } });

				return users.map(({ user }) => user);
			}
		});
		t.nonNull.list.nonNull.field("desiringUsers", {
			type: "User",
			resolve: async (root, args, { prisma }) => {
				const users = await prisma.skill
					.findUnique({ where: { name: root.name } })
					.desiringUsers({ include: { user: true } });

				return users.map(({ user }) => user);
			}
		});
	}
});
