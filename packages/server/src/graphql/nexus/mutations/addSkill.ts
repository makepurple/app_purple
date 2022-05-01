import { oneLine } from "common-tags";
import { arg, mutationField, nonNull } from "nexus";
import { octokit } from "../../../services";
import { PrismaUtils } from "../../../utils";

export const addSkill = mutationField("addSkill", {
	type: nonNull("AddSkillPayload"),
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

		/**
		 * @description If an id is provided, assume this skill already exists.
		 */
		if (existingId) {
			const record = await prisma.skillsOnUsers
				.upsert({
					where: {
						skillId_userId: {
							skillId: existingId,
							userId: user.id
						}
					},
					create: {
						skillId: existingId,
						userId: user.id
					},
					update: {}
				})
				.skill();

			if (!record) throw new Error();

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

		if (!verified) {
			return {
				errors: [
					{
						__typename: "InvalidSkillError",
						message: oneLine`
							All skills must be from GitHub
						`
					}
				]
			};
		}

		const record = await prisma.$transaction(async (transaction) => {
			const newSkill = await transaction.skill.upsert({
				where: PrismaUtils.nonNull(args.where),
				create: { name, owner },
				update: {}
			});

			return await transaction.skillsOnUsers
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
				.skill();
		});

		if (!record) throw new Error();

		return { record };
	}
});
