import { arg, mutationField, nonNull } from "nexus";

export const uploadPostImage = mutationField("uploadPostImage", {
	type: nonNull("UploadPostImagePayload"),
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
		if (!user) throw new Error();

		// eslint-disable-next-line @typescript-eslint/await-thenable
		const image = await args.data.image;

		const uploadResponse = await cloudinary.uploadImageFile(image, {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			folder: user.id
		});

		const record = await prisma.postImage.create({
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

		return { record };
	}
});
