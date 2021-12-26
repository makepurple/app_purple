import { PostDraftUpdateInput } from "@makepurple/validators";
import { arg, mutationField, nonNull } from "nexus";
import { PrismaUtils } from "../../../utils";

export const updatePostDraft = mutationField("updatePostDraft", {
	type: nonNull("UpdatePostDraftPayload"),
	args: {
		data: nonNull(arg({ type: "PostDraftUpdateInput" })),
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const post = await prisma.post.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (post?.publishedAt) return false;

		return true;
	},
	resolve: async (parent, args, { prisma }) => {
		const dataInput = PostDraftUpdateInput.validator({
			content: args.data.content ?? undefined,
			description: args.data.description ?? undefined,
			thumbnailUrl: args.data.thumbnailUrl,
			title: args.data.title ?? undefined
		});

		const record = await prisma.post.update({
			data: dataInput,
			where: PrismaUtils.nonNull(args.where)
		});

		return { record };
	}
});
