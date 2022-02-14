import { GetSkillOwnerExperiencersQuery } from "../../generated";
import {
	GitHubOrganization_fragment_mock,
	GitHub_fragment_mock,
	PageInfo_fragment_mock,
	User_fragment_mock
} from "../fragments";

const DATA_SIZE = 20;

const users = Array.from({ length: DATA_SIZE }, (_, i) => ({
	...User_fragment_mock,
	id: i.toString()
}));

export const GetSkillOwnerExperiencers_mock: GetSkillOwnerExperiencersQuery = {
	__typename: "Query",
	github: {
		...GitHub_fragment_mock,
		repositoryOwner: {
			...GitHubOrganization_fragment_mock,
			experiencers: {
				__typename: "UserConnection",
				pageInfo: PageInfo_fragment_mock,
				totalCount: DATA_SIZE,
				edges: users.map((user) => ({
					__typename: "UserEdge",
					cursor: user.id,
					node: user
				})),
				nodes: users
			}
		}
	}
};
