import { mutationField, nonNull } from "nexus";

export const createPost = mutationField("createPost", {
	type: nonNull("Post"),
	authorize: (parent, args, { user }) => !!user,
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw Error("Unexpected Error");

		const draft = await prisma.post.findFirst({
			where: {
				publishedAt: null
			}
		});

		if (draft) {
			throw new Error("You can only have 1 unfinished draft post at a time!");
		}

		const post = await prisma.post.create({
			data: {
				author: {
					connect: {
						id: user.id
					}
				}
			}
		});

		return post;
	}
});
