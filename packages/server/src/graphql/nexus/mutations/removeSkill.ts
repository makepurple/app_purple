import { oneLine } from "common-tags";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const removeSkill = mutationField("removeSkill", {
	type: nonNull("RemoveSkillPayload"),
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

		if (!skill) {
			return {
				errors: [
					{
						__typename: "SkillNotFoundError",
						message: oneLine`
							This skill does not exist
						`
					}
				]
			};
		}

		const record = await prisma.skillsOnUsers
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
