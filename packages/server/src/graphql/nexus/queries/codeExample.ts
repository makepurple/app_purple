import { arg, nonNull, queryField } from "nexus";
import { PrismaUtils } from "../../../utils";

export const codeExample = queryField("codeExample", {
	type: "CodeExample",
	args: {
		where: nonNull(arg({ type: "CodeExampleWhereUniqueInput" }))
	},
	resolve: async (parent, args, { prisma }) => {
		return await prisma.codeExample.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});
	}
});
