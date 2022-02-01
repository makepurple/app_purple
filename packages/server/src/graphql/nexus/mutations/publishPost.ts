import { PromiseUtils } from "@makepurple/utils";
import { PostPublishInput } from "@makepurple/validators";
import { UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { NotFoundError, PrismaUtils } from "../../../utils";

export const publishPost = mutationField("publishPost", {
	type: nonNull("PublishPostPayload"),
	args: {
		data: nonNull(arg({ type: "PostPublishInput" })),
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const author = await prisma.post
			.findUnique({ where: PrismaUtils.nonNull(args.where) })
			.author();

		if (user.id !== author?.id) return false;

		return true;
	},
	resolve: async (parent, args, { prisma, user }) => {
		if (!user) throw new Error();

		const post = await prisma.post.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!post) throw new NotFoundError("This post does not exist.");

		if (post.publishedAt) return { record: post };

		const dataInput = PostPublishInput.validator({
			content: args.data.content,
			description: args.data.description,
			skills: args.data.skills as any,
			thumbnailUrl: args.data.thumbnailUrl,
			title: args.data.title
		});

		const postTitle = dataInput.title;

		if (!postTitle) {
			throw new Error("Posts must have a title to be published!");
		}

		const urlSlug: string = postTitle
			.replace(/[^a-z0-9]/gim, "")
			.split(/\s+/g)
			.map((word) => word.toLowerCase())
			.join("-")
			.trim();

		const skillIds = args.data.skills
			.filter((skill) => !!skill.id)
			.map((skill) => skill.id) as string[];

		const skillNameOwners = args.data.skills
			.filter((skill) => !!skill.name_owner)
			.map((skill) => skill.name_owner) as { name: string; owner: string }[];

		const skillsById = await prisma.skill.findMany({
			where: { id: { in: skillIds } }
		});

		const record = await prisma.$transaction(async (transaction) => {
			await transaction.post.update({
				where: PrismaUtils.nonNull(args.where),
				data: { skills: { deleteMany: {} } }
			});

			const skillsByNameOwner = await PromiseUtils.map(
				skillNameOwners,
				{ concurrency: 2 },
				async ({ name, owner }) => {
					return await transaction.skill.upsert({
						where: { name_owner: { name, owner } },
						create: { name, owner },
						update: {}
					});
				}
			);

			const skillsToConnect = [...skillsById, ...skillsByNameOwner];

			return await transaction.post.update({
				data: {
					activities: {
						create: {
							skills: {
								connect: skillsToConnect.map((skill) => ({
									id: skill.id
								}))
							},
							type: UserActivityType.PublishPost,
							user: { connect: { id: user.id } }
						}
					},
					content: dataInput.content,
					description: dataInput.description,
					publishedAt: new Date(),
					readTime: args.data?.readTime ?? undefined,
					skills: {
						connectOrCreate: skillsToConnect.map((skill) => ({
							where: {
								skillId_postId: {
									skillId: skill.id,
									postId: post.id
								}
							},
							create: {
								skillId: skill.id,
								postId: post.id
							}
						}))
					},
					title: dataInput.title,
					urlSlug
				},
				where: PrismaUtils.nonNull(args.where)
			});
		});

		return { record };
	}
});
