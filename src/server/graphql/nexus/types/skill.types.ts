import { list, nonNull, objectType } from "nexus";
import { Skill } from "nexus-prisma";

export const skillTypes = [
	objectType({
		name: Skill.$name,
		description: Skill.$description,
		definition: (t) => {
			t.field(Skill.id);
			t.field(Skill.name);
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
	})
];
