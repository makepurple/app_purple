import { arg, mutationField, nonNull } from "nexus";
import { NotFoundError, PrismaUtils } from "../../../utils";

export const removeDesiredSkill = mutationField("removeDesiredSkill", {
	type: nonNull("RemoveDesiredSkillMutationPayload"),
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

		if (!skill) throw new NotFoundError("This skill could not be found");

		const record = await prisma.desiredSkillsOnUsers
			.delete({
				where: {
					skillId_userId: {
						skillId: skill.id,
						userId: user.id
					}
				}
			})
			.user();

		if (!record) throw new Error();

		return { record };
	}
});
