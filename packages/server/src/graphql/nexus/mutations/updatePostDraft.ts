import { PromiseUtils } from "@makepurple/utils";
import { PostDraftUpdateInput } from "@makepurple/validators";
import { arg, mutationField, nonNull } from "nexus";
import { NotFoundError, PrismaUtils } from "../../../utils";

export const updatePostDraft = mutationField("updatePostDraft", {
	type: nonNull("UpdatePostDraftPayload"),
	args: {
		data: nonNull(arg({ type: "PostDraftUpdateInput" })),
		where: nonNull(arg({ type: "PostWhereUniqueInput" }))
	},
	authorize: async (parent, args, { prisma, user }) => {
		if (!user) return false;

		const post = await prisma.post.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (post?.publishedAt) return false;

		return true;
	},
	resolve: async (parent, args, { prisma }) => {
		const post = await prisma.post.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (!post) throw new NotFoundError("This post does not exist.");

		const dataInput = PostDraftUpdateInput.validator({
			content: args.data.content ?? undefined,
			description: args.data.description ?? undefined,
			skills: args.data.skills as any,
			thumbnailUrl: args.data.thumbnailUrl,
			title: args.data.title ?? undefined
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
					},
					title: dataInput.title
				},
				where: PrismaUtils.nonNull(args.where)
			});
		});

		return { record };
	}
});
