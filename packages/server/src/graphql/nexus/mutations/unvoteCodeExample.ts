import { UserActivityType } from "@prisma/client";
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
			where: PrismaUtils.nonNull(args.where),
			include: {
				activities: {
					where: {
						type: UserActivityType.UpvoteCodeExample,
						user: { id: user.id }
					}
				}
			}
		});

		if (!codeExample) throw new NotFoundError("Code-example could not be found");

		const record = await prisma.$transaction(async (transaction) => {
			await transaction.userActivity.deleteMany({
				where: {
					id: {
						in: codeExample.activities.map((activity) => activity.id)
					}
				}
			});

			const { codeExample: result } = await transaction.codeExampleUpvoter.delete({
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

			return result;
		});

		return { record };
	}
});
