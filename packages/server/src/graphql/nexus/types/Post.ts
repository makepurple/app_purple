import { NexusPrisma } from "@makepurple/prisma/nexus";
import { intArg, list, nonNull, objectType } from "nexus";

export const Post = objectType({
	name: NexusPrisma.Post.$name,
	description: NexusPrisma.Post.$description,
	definition: (t) => {
		t.field(NexusPrisma.Post.author);
		t.field(NexusPrisma.Post.authorName);
		t.field(NexusPrisma.Post.content);
		t.field(NexusPrisma.Post.createdAt);
		t.field(NexusPrisma.Post.description);
		t.field(NexusPrisma.Post.id);
		t.field(NexusPrisma.Post.images);
		t.field(NexusPrisma.Post.publishedAt);
		t.field(NexusPrisma.Post.thumbnailUrl);
		t.field(NexusPrisma.Post.title);
		t.field(NexusPrisma.Post.updatedAt);
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
		t.field(NexusPrisma.Post.urlSlug);
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
