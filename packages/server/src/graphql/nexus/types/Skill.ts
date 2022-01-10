import { NexusPrisma } from "@makepurple/prisma/nexus";
import { objectType } from "nexus";
import { octokit } from "../../../services";
import { GitHubRepository } from "../../../services/octokit";

export const Skill = objectType({
	name: NexusPrisma.Skill.$name,
	description: NexusPrisma.Skill.$description,
	definition: (t) => {
		t.field(NexusPrisma.Skill.id);
		t.nonNull.field("github", {
			type: "GitHubRepository",
			resolve: async (parent, args, { octokit: graphql }) => {
				const githubRepository = await graphql`
					query GetGitHubRepositoryForSkill($name: String!, $owner: String!) {
						repository(name: $name, owner: $owner) {
							...GitHubRepository
						}
					}
					${GitHubRepository}
				`
					.cast<
						octokit.GetGitHubRepositoryForSkillQuery,
						octokit.GetGitHubRepositoryForSkillQueryVariables
					>({
						name: parent.name,
						owner: parent.owner
					})
					.catch(() => null);

				if (!githubRepository?.repository) {
					throw new Error("Could not get skill's GitHub data");
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
		t.field(NexusPrisma.Skill.name);
		t.field(NexusPrisma.Skill.owner);
		t.nonNull.list.nonNull.field("users", {
			type: "User",
			resolve: async (root, args, { prisma }) => {
				const users = await prisma.skill
					.findUnique({
						where: {
							name_owner: {
								name: root.name,
								owner: root.owner
							}
						}
					})
					.users({ include: { user: true } });

				return users.map(({ user }) => user);
			}
		});
		t.nonNull.list.nonNull.field("desiringUsers", {
			type: "User",
			resolve: async (root, args, { prisma }) => {
				const users = await prisma.skill
					.findUnique({
						where: {
							name_owner: {
								name: root.name,
								owner: root.owner
							}
						}
					})
					.desiringUsers({ include: { user: true } });

				return users.map(({ user }) => user);
			}
		});
	}
});
