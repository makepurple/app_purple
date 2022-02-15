import { GetSkillOwnerRepositoriesQuery } from "../../generated";
import {
	GitHubOrganization_fragment_mock,
	GitHubRepository_fragment_mock,
	GitHub_fragment_mock,
	PageInfo_fragment_mock,
	Skill_fragment_mock
} from "../fragments";

const DATA_SIZE = 6;

const repositories = Array.from({ length: DATA_SIZE }, (_, i) => ({
	...GitHubRepository_fragment_mock,
	skill: {
		...Skill_fragment_mock,
		viewerFollowing: i % 2 === 1,
		viewerSkill: i % 2 === 0
	},
	id: `${i}`
}));

export const GetSkillOwnerRepositories_mock: GetSkillOwnerRepositoriesQuery = {
	__typename: "Query",
	github: {
		...GitHub_fragment_mock,
		repositoryOwner: {
			...GitHubOrganization_fragment_mock,
			repositories: {
				__typename: "GitHubRepositoryConnection",
				pageInfo: PageInfo_fragment_mock,
				totalCount: DATA_SIZE,
				edges: repositories.map((repository) => ({
					__typename: "GitHubRepositoryEdge",
					cursor: repository.id,
					node: repository as any
				})),
				nodes: repositories as any
			}
		}
	}
};
