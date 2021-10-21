import { arg, inputObjectType, mutationField, nonNull } from "nexus";

export const CreatePostInput = inputObjectType({
	name: "CreatePostInput",
	definition: (t) => {
		t.nonNull.string("title");
		t.nonNull.json("content");
		t.field("thumbnail", { type: "Upload" });
	}
});

export const createPost = mutationField("createPost", {
	type: nonNull("Post"),
	authorize: (parent, args, { user }) => !!user,
	args: {
		input: nonNull(arg({ type: "CreatePostInput" }))
	},
	resolve: async (parent, { input }, { cloudinary, prisma, user }) => {
		if (!user) throw Error("Unexpected Error");

		const thumbnailResult = input.thumbnail
			? await cloudinary.client.uploadImageFile(input.thumbnail).catch(() => null)
			: null;

		const post = await prisma.$transaction(async (transaction) => {
			const newPost = await transaction.post.create({
				data: {
					title: input.title,
					content: input.content,
					author: {
						connect: {
							id: user.id
						}
					}
				}
			});

			if (thumbnailResult) {
				const thumbnailImage = await transaction.postImage.create({
					data: {
						id: "",
						post: {
							connect: {
								id: newPost.id
							}
						}
					}
				});
			}

			return newPost;
		});

		return post;
	}
});
