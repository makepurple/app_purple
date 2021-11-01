import { intArg, list, nonNull, objectType } from "nexus";
import { Post as _Post } from "nexus-prisma";

export const Post = objectType({
	name: _Post.$name,
	description: _Post.$description,
	definition: (t) => {
		t.field(_Post.author);
		t.field(_Post.authorName);
		t.field(_Post.content);
		t.field(_Post.createdAt);
		t.field(_Post.description);
		t.field(_Post.id);
		t.field(_Post.images);
		t.field(_Post.publishedAt);
		t.field(_Post.thumbnailUrl);
		t.field(_Post.title);
		t.field(_Post.updatedAt);
		t.nonNull.int("upvoteCount", {
			resolve: async ({ id }, args, { prisma }) => {
				return await prisma.postUpvoter.count({
					where: { postId: id }
				});
			}
		});
		t.field("upvotingUsers", {
			type: nonNull(list(nonNull("User"))),
			args: {
				skip: intArg({ default: 0 }),
				take: intArg({ default: 50 })
			},
			resolve: async ({ id }, args, { prisma }) => {
				const users = await prisma.post
					.findUnique({
						where: { id }
					})
					.upvotes({
						skip: args.skip ?? 0,
						take: Math.min(args.take ?? 50, 50),
						select: { user: true }
					})
					.then((upvotes) => upvotes.map(({ user }) => user));

				return users;
			}
		});
		t.field(_Post.urlSlug);
		t.nonNull.boolean("viewerUpvoted", {
			resolve: async ({ id }, args, { prisma, user }) => {
				if (!user?.id) return false;

				const postUpvoter = await prisma.postUpvoter.findUnique({
					where: {
						userId_postId: {
							userId: user.id,
							postId: id
						}
					}
				});

				return !!postUpvoter;
			}
		});
	}
});
