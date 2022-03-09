import { nonNull, queryField } from "nexus";
import { PrismaUtils } from "../../../utils";

export const user = queryField("user", {
	type: "User",
	args: {
		where: nonNull("UserWhereUniqueInput")
	},
	resolve: async (parent, args, { prisma }) => {
		const record = await prisma.user.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		return record;
	}
});
