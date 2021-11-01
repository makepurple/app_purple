import { oneLine } from "common-tags";
import { arg, inputObjectType, mutationField, nonNull } from "nexus";

export const UploadPostImageInput = inputObjectType({
	name: "UploadPostImageInput",
	definition: (t) => {
		t.nonNull.upload("image", {
			description: "The file of the image to be uploaded"
		});
		t.string("fileName", {
			description: oneLine`
				Set a custom filename when uploading to cloudinary. This will overwrite any file
				that exists under this filename.
			`
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
	resolve: async (parent, args, { cloudinary, prisma, user }) => {
		// eslint-disable-next-line @typescript-eslint/await-thenable
		const image = await args.data.image;

		const uploadResponse = await cloudinary.client.uploadImageFile(image, {
			fileName: args.data.fileName ?? undefined,
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
