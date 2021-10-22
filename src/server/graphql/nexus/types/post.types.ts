import { intArg, list, nonNull, objectType } from "nexus";
import { Post, PostImage } from "nexus-prisma";

export const postTypes = [
	objectType({
		name: Post.$name,
		description: Post.$description,
		definition: (t) => {
			t.field(Post.author);
			t.field(Post.authorId);
			t.field(Post.comments);
			t.field(Post.content);
			t.field(Post.createdAt);
			t.field(Post.id);
			t.field(Post.images);
			t.field(Post.publishedAt);
			t.field(Post.thumbnailUrl);
			t.field(Post.title);
			t.field(Post.updatedAt);
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
	}),
	objectType({
		name: PostImage.$name,
		description: PostImage.$description,
		definition: (t) => {
			t.field(PostImage.id);
			t.field(PostImage.post);
			t.field(PostImage.postId);
		}
	})
];
