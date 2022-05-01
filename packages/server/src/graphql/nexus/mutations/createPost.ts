import { oneLine } from "common-tags";
import { mutationField, nonNull } from "nexus";

export const createPost = mutationField("createPost", {
	type: nonNull("CreatePostPayload"),
	description: oneLine`
		Creates a new draft if the user doesn't have a draft pending to be published already
	`,
	authorize: (parent, args, { user }) => !!user,
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw Error("Unexpected Error");

		const draft = await prisma.post.findFirst({
			where: {
				OR: [{ publishedAt: null }, { urlSlug: "draft" }]
			}
		});

		if (draft) {
			return {
				errors: [
					{
						__typename: "PostDraftLimitError",
						message: oneLine`
							You can only have 1 unfinished draft post at a time!
						`
					}
				]
			};
		}

		const record = await prisma.post.create({
			data: {
				author: {
					connect: {
						id: user.id
					}
				}
			}
		});

		return { record };
	}
});
