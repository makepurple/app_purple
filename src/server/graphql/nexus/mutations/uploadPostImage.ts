import { arg, inputObjectType, mutationField, nonNull } from "nexus";

export const UploadPostImageInput = inputObjectType({
	name: "UploadPostImageInput",
	definition: (t) => {
		t.nonNull.upload("image", {
			description: "The file of the image to be uploaded"
		});
	}
});

export const uploadPostImage = mutationField("uploadPostImage", {
	type: nonNull("PostImage"),
	args: {
		where: nonNull(arg({ type: "PostWhereUniqueInput" })),
		data: nonNull(arg({ type: "UploadPostImageInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const post = await prisma.post.findUnique({
			where: {
				id: args.where.id ?? undefined
			}
		});

		if (post?.authorId !== user.id) return false;

		return true;
	},
	resolve: async (parent, args, { cloudinary, prisma }) => {
		const uploadResponse = await cloudinary.client.uploadImageFile(args.data.image);

		return await prisma.postImage.create({
			data: {
				id: uploadResponse.public_id,
				post: {
					connect: {
						id: args.where.id ?? undefined
					}
				}
			}
		});
	}
});
