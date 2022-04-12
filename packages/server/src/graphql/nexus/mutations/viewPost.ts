import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const viewPost = mutationField("viewPost", {
	type: nonNull("ViewPostPayload"),
	args: {
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	resolve: async (parent, args, { ip, prisma, user }) => {
		if (!ip) throw new Error();

		const post = await prisma.post.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!post) throw new Error("This post could not be found");

		const record = await prisma.postViewer
			.upsert({
				where: {
					ip_postId: {
						ip,
						postId: post.id
					}
				},
				create: {
					ip,
					post: { connect: { id: post.id } },
					user: user?.id ? { connect: { id: user?.id } } : undefined
				},
				update: {}
			})
			.post();

		if (!record) throw new Error();

		return { record };
	}
});
