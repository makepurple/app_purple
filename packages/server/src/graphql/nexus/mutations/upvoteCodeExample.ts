import { arg, mutationField, nonNull } from "nexus";
import { NotFoundError, PrismaUtils } from "../../../utils";

export const upvoteCodeExample = mutationField("upvoteCodeExample", {
	type: nonNull("UpvoteCodeExamplePayload"),
	args: {
		data: arg({ type: "UpvoteCodeExampleInput" }),
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

		if (!codeExample) throw new NotFoundError("Code-example could not be found");

		const record = await prisma.codeExample.update({
			where: PrismaUtils.nonNull(args.where),
			data: {
				upvoters: {
					connectOrCreate: {
						where: {
							codeExampleId_userId: {
								codeExampleId: codeExample.id,
								userId: user.id
							}
						},
						create: {
							upvote: args.data?.upvote ?? undefined,
							userId: user.id
						}
					}
				}
			}
		});

		return { record };
	}
});
