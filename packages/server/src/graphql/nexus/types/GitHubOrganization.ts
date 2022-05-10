import { nonNull, objectType } from "nexus";

export const GitHubOrganization = objectType({
	name: "GitHubOrganization",
	sourceType: "octokit.DeepGitHubType<octokit.GitHubOrganizationFragment>",
	definition: (t) => {
		t.implements("GitHubRepositoryOwner");
		t.string("description");
		t.string("name");
		t.field("organization", {
			type: nonNull("Organization"),
			resolve: async (parent, args, { prisma }) => {
				const organization = await prisma.organization.findUnique({
					where: {
						name: parent.login
					}
				});

				if (!organization) {
					throw new Error("Organization could not be found");
				}

				return organization;
			}
		});
		t.string("twitterUsername");
		t.nonNull.url("url");
		t.string("websiteUrl");
	}
});
