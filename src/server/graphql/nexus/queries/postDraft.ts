import { queryField } from "nexus";

export const postDraft = queryField("postDraft", {
	type: "Post",
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma, user }) => {
		return await prisma.post.findUnique({
			where: {
				authorName_urlSlug: {
					// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
					authorName: user!.name,
					urlSlug: "draft"
				}
			}
		});
	}
});
