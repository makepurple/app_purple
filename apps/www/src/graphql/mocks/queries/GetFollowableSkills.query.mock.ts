import { GetFollowableSkillsQuery } from "../../generated";
import { PageInfo_fragment_mock, Skill_fragment_mock } from "../fragments";

const DATA_SIZE = 20;

const skills = Array.from({ length: DATA_SIZE }, (_, i) => ({
	...Skill_fragment_mock,
	id: i.toString()
}));

export const GetFollowableSkills_mock: GetFollowableSkillsQuery = {
	__typename: "Query",
	followableSkills: {
		__typename: "SkillConnection",
		pageInfo: PageInfo_fragment_mock,
		edges: skills.map((skill, i) => ({
			__typename: "SkillEdge",
			cursor: `${i}`,
			node: skill
		})),
		nodes: skills as any
	}
};
