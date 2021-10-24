import { list, nonNull, objectType } from "nexus";
import { Skill as _Skill } from "nexus-prisma";

export const Skill = objectType({
	name: _Skill.$name,
	description: _Skill.$description,
	definition: (t) => {
		t.field(_Skill.id);
		t.field(_Skill.name);
		t.field("users", {
			type: nonNull(list(nonNull("User"))),
			resolve: (root, args, { prisma }) => {
				return prisma.skillsOnUsers
					.findMany({
						where: { skillName: root.name },
						select: { user: true }
					})
					.then((users) => users.map(({ user }) => user));
			}
		});
	}
});
