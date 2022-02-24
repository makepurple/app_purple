import { arg, mutationField, nonNull } from "nexus";
import { NotFoundError, PrismaUtils } from "../../../utils";

export const unvoteCodeExample = mutationField("unvoteCodeExample", {
	type: nonNull("UnvoteCodeExamplePayload"),
	args: {
		where: nonNull(arg({ type: "CodeExampleWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const codeExample = await prisma.codeExample.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!codeExample) throw new NotFoundError("Code-exampe could not be found");

		const { codeExample: record } = await prisma.codeExampleUpvoter.delete({
			where: {
				codeExampleId_userId: {
					codeExampleId: codeExample.id,
					userId: user.id
				}
			},
			select: {
				codeExample: true
			}
		});

		return { record };
	}
});
