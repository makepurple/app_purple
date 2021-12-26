import { NexusPrisma } from "@makepurple/prisma/nexus";
import { objectType } from "nexus";
import { octokit } from "../../../services";
import { GitHubRepository } from "../../../services/octokit";

export const Repository = objectType({
	name: NexusPrisma.Repository.$name,
	description: NexusPrisma.Repository.$description,
	definition: (t) => {
		t.field(NexusPrisma.Repository.id);
		t.nonNull.field("github", {
			type: "GitHubRepository",
			resolve: async (parent, args, { octokit: graphql, prisma }) => {
				const owner = await prisma.repository
					.findUnique({ where: { id: parent.id } })
					.user({ select: { name: true } });

				if (!owner) throw new Error();

				const githubRepository = await graphql`
					query GetGitHubRepository($name: String!, $owner: String!) {
						repository(name: $name, owner: $owner) {
							...GitHubRepository
						}
					}
					${GitHubRepository}
				`
					.cast<
						octokit.GetGitHubRepositoryQuery,
						octokit.GetGitHubRepositoryQueryVariables
					>({
						name: parent.name,
						owner: owner.name
					})
					.catch(() => null);

				if (!githubRepository?.repository) {
					throw new Error("Could not get repository's GitHub data");
				}

				/**
				 * !HACK
				 * @description Cannot handle GitHub's RepositoryOwner type well, so casting to any
				 * here to ignore type error.
				 * @author David Lee
				 * @date December 24, 2021
				 */
				const repository: any = githubRepository.repository;

				return repository;
			}
		});
		t.field(NexusPrisma.Repository.name);
		t.nonNull.list.nonNull.field("skills", {
			type: "Skill",
			resolve: async ({ id }, args, { prisma }) => {
				return await prisma.repository
					.findUnique({ where: { id } })
					.skills({ select: { skill: true } })
					.then((skills) => skills.map((s) => s.skill));
			}
		});
		t.field(NexusPrisma.Repository.user);
		t.field(NexusPrisma.Repository.owner);
	}
});
