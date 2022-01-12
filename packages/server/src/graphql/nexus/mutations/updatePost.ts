import { PromiseUtils } from "@makepurple/utils";
import { PostUpdateInput } from "@makepurple/validators";
import { arg, mutationField, nonNull } from "nexus";
import { NotFoundError, PrismaUtils } from "../../../utils";

export const updatePost = mutationField("updatePost", {
	type: nonNull("UpdatePostPayload"),
	args: {
		data: nonNull(arg({ type: "PostUpdateInput" })),
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { prisma }) => {
		const post = await prisma.post.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!post) throw new NotFoundError("This post does not exist.");

		const dataInput = PostUpdateInput.validator({
			content: args.data.content ?? undefined,
			description: args.data.description ?? undefined,
			skills: args.data.skills as any,
			thumbnailUrl: args.data.thumbnailUrl
		});

		const skillIds = (args.data.skills ?? [])
			.filter((skill) => !!skill.id)
			.map((skill) => skill.id) as string[];

		const skillNameOwners = (args.data.skills ?? [])
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
					content: dataInput.content,
					description: dataInput.description,
					publishedAt: new Date(),
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
					}
				},
				where: PrismaUtils.nonNull(args.where)
			});
		});

		return { record };
	}
});
