import { objectType } from "nexus";

export const GitHubRepository = objectType({
	name: "GitHubRepository",
	sourceType: "octokit.DeepGitHubType<octokit.GitHubRepositoryFragment>",
	definition: (t) => {
		t.implements("Node");
		t.string("description");
		t.nonNull.int("forkCount");
		t.nonNull.int("issueCount", {
			resolve: (parent) => {
				return parent._issueCount.totalCount;
			}
		});
		t.field("licenseInfo", { type: "GitHubLicense" });
		t.nonNull.string("name");
		t.nonNull.field("owner", { type: "GitHubRepositoryOwner" });
		t.field("primaryLanguage", { type: "GitHubLanguage" });
		t.nonNull.int("pullRequestCount", {
			resolve: (parent) => {
				return parent._pullRequestCount.totalCount;
			}
		});
		t.dateTime("pushedAt");
		t.field("repository", {
			type: "Repository",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.repository.findUnique({
					where: {
						name_owner: {
							name: parent.name,
							owner: parent.owner.login
						}
					}
				});
			}
		});
		t.field("skill", {
			type: "Skill",
			resolve: async (parent, args, { prisma }) => {
				return await prisma.skill.findUnique({
					where: {
						name_owner: {
							name: parent.name,
							owner: parent.owner.login
						}
					}
				});
			}
		});
		t.nonNull.int("stargazerCount");
		t.nonNull.url("url");
	}
});
