import { interfaceType } from "nexus";
import type { octokit } from "../../../services";
import { GitHubRepository } from "../../../services/octokit";

export const WithGitHubRepository = interfaceType({
	name: "WithGitHubRepository",
	definition: (t) => {
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
					throw new Error(
						`Could not get skill's GitHub data: ${parent.owner}/${parent.name}`
					);
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
		t.nonNull.string("name");
		t.nonNull.string("owner");
	}
});
