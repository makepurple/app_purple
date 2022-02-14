import { arg, mutationField, nonNull } from "nexus";
import { octokit } from "../../../services";
import { PrismaUtils } from "../../../utils";

export const addSkill = mutationField("addSkill", {
	type: nonNull("AddSkillMutationPayload"),
	args: {
		where: nonNull(arg({ type: "SkillWhereUniqueInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { octokit: graphql, prisma, user }) => {
		if (!user) throw new Error();

		if (!args.where.id || !args.where.name_owner) throw new Error("Invalid input");

		/**
		 * @description If an id is provided, assume this skill already exists.
		 */
		if (args.where.id) {
			const record = await prisma.skillsOnUsers
				.upsert({
					where: {
						skillId_userId: {
							skillId: args.where.id,
							userId: user.id
						}
					},
					create: {
						skillId: args.where.id,
						userId: user.id
					},
					update: {}
				})
				.user();

			if (!record) throw new Error();

			return { record };
		}

		/**
		 * @description If this skill already exists otherwise, just look-up and set on user
		 */
		const skill = await prisma.skill.findUnique({
			where: PrismaUtils.nonNull(args.where)
		});

		if (skill) {
			const record = await prisma.skillsOnUsers
				.upsert({
					where: {
						skillId_userId: {
							skillId: skill.id,
							userId: user.id
						}
					},
					create: {
						skillId: skill.id,
						userId: user.id
					},
					update: {}
				})
				.user();

			if (!record) throw new Error();

			return { record };
		}

		/**
		 * @description Skill doesn't exist. Verify and create it before setting on user
		 */
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

			return await prisma.skillsOnUsers
				.upsert({
					where: {
						skillId_userId: {
							skillId: newSkill.id,
							userId: user.id
						}
					},
					create: {
						skillId: newSkill.id,
						userId: user.id
					},
					update: {}
				})
				.user();
		});

		if (!record) throw new Error();

		return { record };
	}
});
