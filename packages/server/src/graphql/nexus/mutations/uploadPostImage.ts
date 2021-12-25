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
			},
			select: {
				author: {
					select: {
						id: true
					}
				}
			}
		});

		if (post?.author.id !== user.id) return false;

		return true;
	},
	resolve: async (parent, args, { cloudinary, prisma, user }) => {
		// eslint-disable-next-line @typescript-eslint/await-thenable
		const image = await args.data.image;

		const uploadResponse = await cloudinary.client.uploadImageFile(image, {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			folder: user!.id
		});

		return await prisma.postImage.create({
			data: {
				id: uploadResponse.public_id,
				post: {
					connect: {
						id: args.where.id ?? undefined
					}
				},
				url: uploadResponse.secure_url
			}
		});
	}
});