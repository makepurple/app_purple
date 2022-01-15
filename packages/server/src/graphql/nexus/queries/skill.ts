import { arg, nonNull, queryField } from "nexus";
import { PrismaUtils } from "../../../utils";

export const skill = queryField("skill", {
	type: "Skill",
	args: {
		where: nonNull(arg({ type: "SkillWhereUniqueInput" }))
	},
	resolve: async (parent, args, { prisma }) => {
		return await prisma.skill.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});
	}
});
