import { GetSkillFollowersQuery } from "../../generated";
import { PageInfo_fragment_mock, Skill_fragment_mock, User_fragment_mock } from "../fragments";

const DATA_SIZE = 20;

const users = Array.from({ length: DATA_SIZE }, (_, i) => ({
	...User_fragment_mock,
	id: i.toString()
}));

export const GetSkillFollowers_mock: GetSkillFollowersQuery = {
	__typename: "Query",
	skill: {
		...Skill_fragment_mock,
		followers: {
			__typename: "UserConnection",
			pageInfo: {
				...PageInfo_fragment_mock
			},
			totalCount: DATA_SIZE,
			edges: users.map((user) => ({
				__typename: "UserEdge",
				cursor: user.id,
				node: user
			})),
			nodes: users
		}
	}
};
