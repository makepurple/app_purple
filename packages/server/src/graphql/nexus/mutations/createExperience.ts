import { ExperienceCreateInput } from "@makepurple/validators";
import { oneLine } from "common-tags";
import { arg, mutationField, nonNull } from "nexus";
import { octokit } from "../../../services";

export const createExperience = mutationField("createExperience", {
	type: nonNull("CreateExperiencePayload"),
	args: {
		data: nonNull(arg({ type: "ExperienceCreateInput" }))
	},
	authorize: (root, args, { user }) => {
		return !!user;
	},
	resolve: async (root, args, { octokit: graphql, prisma, user }) => {
		if (!user) throw new Error();

		const dataInput = ExperienceCreateInput.validator({
			endDate: args.data.endDate,
			highlights: args.data.highlights ?? [],
			location: args.data.location,
			organizationName: args.data.organizationName,
			positionName: args.data.positionName,
			startDate: args.data.startDate,
			type: args.data.type
		});

		const verified = await graphql`
			query VerifyOrganization($name: String!) {
				organization(login: $name) {
					id
				}
			}
		`
			.cast<octokit.VerifyOrganizationQuery, octokit.VerifyOrganizationQueryVariables>({
				name: dataInput.organizationName
			})
			.then((result) => !!result.organization)
			.catch(() => false);

		if (!verified) {
			return {
				errors: [
					{
						__typename: "InvalidOrganizationError",
						message: oneLine`
							This organization does not exist on GitHub
						`
					}
				]
			};
		}

		const record = await prisma.experience.create({
			data: {
				endDate: dataInput.endDate as Maybe<Date>,
				highlights: (dataInput.highlights ?? []) as string[],
				location: dataInput.location,
				organization: {
					connectOrCreate: {
						create: {
							name: dataInput.organizationName
						},
						where: {
							name: dataInput.organizationName
						}
					}
				},
				positionName: dataInput.positionName,
				startDate: dataInput.startDate as Date,
				type: dataInput.type,
				user: { connect: { id: user.id } }
			}
		});

		return { record };
	}
});
