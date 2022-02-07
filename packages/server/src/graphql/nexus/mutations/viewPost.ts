import { arg, mutationField, nonNull } from "nexus";
import { NotFoundError, PrismaUtils } from "../../../utils";

export const viewPost = mutationField("viewPost", {
	type: nonNull("ViewPostPayload"),
	args: {
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	authorize: (parent, args, { ip }) => {
		return !!ip;
	},
	resolve: async (parent, args, { ip, prisma, user }) => {
		if (!ip) throw new Error();

		const post = await prisma.post.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!post) throw new NotFoundError("This post could not be found");

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
					user: { connect: { id: user?.id } }
				},
				update: {}
			})
			.post();

		if (!record) throw new Error();

		return { record };
	}
});
