import { GetSkillsQuery, GetSkillsQueryVariables } from "../../generated";
import { Skill_fragment_mock } from "../fragments";

const DATA_SIZE = 20;

const skills = Array.from({ length: DATA_SIZE }, (_, i) => ({
	...Skill_fragment_mock,
	id: i.toString()
}));

export const GetSkills_mock: GetSkillsQuery = {
	__typename: "Query",
	skill: {
		...Skill_fragment_mock,
		id: "-1"
	} as any,
	skills: {
		__typename: "SkillConnection",
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		},
		totalCount: DATA_SIZE,
		edges: skills.map((skill) => ({
			__typename: "SkillEdge",
			cursor: skill.id.toString(),
			node: skill
		})),
		nodes: skills as any
	}
};

export const GetSkills_variables_mock: GetSkillsQueryVariables = {
	after: null,
	first: DATA_SIZE,
	name: "",
	owner: ""
};
