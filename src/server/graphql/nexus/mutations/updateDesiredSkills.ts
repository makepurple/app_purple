import { StringUtils } from "@/utils";
import { arg, inputObjectType, mutationField, nonNull } from "nexus";

export const UpdateDesiredSkillsInput = inputObjectType({
	name: "UpdateDesiredSkillsInput",
	definition: (t) => {
		t.nonNull.list.nonNull.string("skills", {
			description: "List of skills (by name) to add to the user."
		});
	}
});

export const updateDesiredSkills = mutationField("updateDesiredSkills", {
	type: nonNull("User"),
	authorize: (parent, args, { user }) => !!user,
	args: {
		input: nonNull(arg({ type: "UpdateDesiredSkillsInput" }))
	},
	resolve: async (parent, { input }, { prisma, user }) => {
		if (!user?.id) throw new Error("Should not reach here");

		const { skills } = input;
		const userId: number = user.id;

		const sql = StringUtils.rename((...args) => prisma.$executeRaw(...args));

		const [updatedUser] = await prisma.$transaction([
			prisma.user.update({
				where: {
					id: user.id
				},
				data: {
					desiredSkills: {
						connectOrCreate: skills.map((skillName) => ({
							where: {
								skillName_userId: { skillName, userId }
							},
							create: {
								skill: {
									name: skillName
								}
							}
						})),
						deleteMany: {
							skillName: {
								notIn: [...skills]
							}
						}
					}
				}
			}),
			sql`
				DELETE FROM Skill s
				WHERE s.name NOT IN (
					SELECT DISTINCT skillName
					FROM   SkillsOnUsers
					WHERE  skillName = s.name
				)
				OR s.name NOT IN (
					SELECT DISTINCT skillName
					FROM   DesiredSkillsOnUsers
					WHERE  skillName = s.name
				);
			`
		]);

		return updatedUser;
	}
});
