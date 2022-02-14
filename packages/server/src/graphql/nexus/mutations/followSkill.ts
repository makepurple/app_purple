import { UserActivityType } from "@prisma/client";
import { arg, mutationField, nonNull } from "nexus";
import { octokit } from "../../../services";
import { PrismaUtils } from "../../../utils";

export const followSkill = mutationField("followSkill", {
	type: nonNull("FollowUserPayload"),
	args: {
		where: nonNull(arg({ type: "SkillWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { octokit: graphql, prisma, user }) => {
		if (!user) throw new Error();

		if (!args.where.id && !args.where.name_owner) throw new Error("Invalid input");

		const existingId =
			args.where.id ??
			(await prisma.skill
				.findUnique({ where: PrismaUtils.nonNull(args.where) })
				.then((skill) => skill?.id));

		if (existingId) {
			const record = await prisma.followSkill
				.create({
					data: {
						follow: {
							create: {
								activities: {
									create: {
										type: UserActivityType.FollowSkill,
										user: { connect: { id: user.id } }
									}
								}
							}
						},
						follower: { connect: { id: user.id } },
						following: { connect: { id: existingId } }
					},
					include: {
						follow: true
					}
				})
				.then((result) => result.follow);

			return { record };
		}

		/**
		 * @description Skill doesn't exist. Verify and create it before setting on user
		 */
		if (!args.where.name_owner) throw new Error("Invalid input");

		const { name, owner } = args.where.name_owner;

		const verified = await graphql`
			query VerifySkill($name: String!, $owner: String!) {
				repository(followRenames: false, name: $name, owner: $owner) {
					id
				}
			}
		`
			.cast<octokit.VerifySkillQuery, octokit.VerifySkillQueryVariables>({
				name,
				owner
			})
			.then((result) => !!result.repository)
			.catch(() => false);

		if (!verified) throw new Error("This skill does not exist on GitHub");

		const record = await prisma.$transaction(async (transaction) => {
			const newSkill = await transaction.skill.upsert({
				where: PrismaUtils.nonNull(args.where),
				create: { name, owner },
				update: {}
			});

			return await prisma.followSkill
				.create({
					data: {
						follow: {
							create: {
								activities: {
									create: {
										type: UserActivityType.FollowSkill,
										user: { connect: { id: user.id } }
									}
								}
							}
						},
						follower: { connect: { id: user.id } },
						following: { connect: { id: newSkill.id } }
					},
					include: {
						follow: true
					}
				})
				.then((result) => result.follow);
		});

		return { record };
	}
});
