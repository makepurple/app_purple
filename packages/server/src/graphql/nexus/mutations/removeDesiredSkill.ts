import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const removeDesiredSkill = mutationField("removeDesiredSkill", {
	type: nonNull("RemoveDesiredSkillPayload"),
	args: {
		where: nonNull(arg({ type: "SkillWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const skill = await prisma.skill.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!skill) throw new Error("This skill could not be found");

		const record = await prisma.desiredSkillsOnUsers
			.delete({
				where: {
					skillId_userId: {
						skillId: skill.id,
						userId: user.id
					}
				}
			})
			.skill();

		if (!record) throw new Error();

		return { record };
	}
});
