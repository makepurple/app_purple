import { arg, mutationField, nonNull } from "nexus";
import type { octokit } from "../../../services";

export const createRepository = mutationField("createRepository", {
	type: nonNull("CreateRepositoryPayload"),
	args: {
		data: nonNull(arg({ type: "RepositoryCreateInput" }))
	},
	authorize: (parent, args, { user }) => {
		return !!user;
	},
	resolve: async (parent, args, { octokit: graphql, prisma, user }) => {
		if (!user) throw new Error();

		const githubRepository = await graphql`
			query GetRepositoryToCreate($name: String!, $owner: String!) {
				repository(name: $name, owner: $owner) {
					id
				}
			}
		`
			.cast<octokit.GetRepositoryToCreateQuery, octokit.GetRepositoryToCreateQueryVariables>({
				name: args.data.name,
				owner: user.name
			})
			.catch(() => null);

		if (!githubRepository?.repository) throw new Error("This repository does not exist");

		const record = await prisma.repository.create({
			data: {
				name: args.data.name,
				user: {
					connect: {
						id: user.id
					}
				}
			}
		});

		return { record };
	}
});
