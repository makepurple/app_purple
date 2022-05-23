import { oneLine } from "common-tags";
import { mutationField, nonNull } from "nexus";

export const createPost = mutationField("createPost", {
	type: nonNull("CreatePostPayload"),
	description: oneLine`
		Creates a new draft if the user doesn't have a draft pending to be published already
	`,
	authorize: (parent, args, { user }) => !!user,
	resolve: async (parent, args, { graphcdn, prisma, res, user }) => {
		if (!user) throw Error("Unexpected Error");

		const draft = await prisma.post.findFirst({
			where: {
				author: { id: { equals: user.id } },
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
				},
				content: [
					{
						type: "paragraph",
						children: [{ text: "" }]
					}
				]
			}
		});

		await graphcdn.purge`
			mutation($userId: ID!) {
				purgeQuery_postDraft
				purgeUser(id: $userId)
			}
		`({ userId: user.id });

		await res.unstable_revalidate("/leedavidcs").catch(() => null);

		return { record };
	}
});
