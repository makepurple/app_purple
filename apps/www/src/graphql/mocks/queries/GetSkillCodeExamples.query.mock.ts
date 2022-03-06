import { GetSkillCodeExamplesQuery } from "../../generated";
import {
	CodeExample_fragment_mock,
	PageInfo_fragment_mock,
	Skill_fragment_mock
} from "../fragments";

const DATA_SIZE = 20;

const codeExamples = Array.from({ length: DATA_SIZE }, (_, i) => ({
	...CodeExample_fragment_mock,
	id: `${i}`
}));

export const GetSkillCodeExamples_mock: GetSkillCodeExamplesQuery = {
	__typename: "Query",
	skill: {
		...(Skill_fragment_mock as any),
		codeExamples: {
			__typename: "CodeExampleConnection",
			pageInfo: PageInfo_fragment_mock,
			totalCount: DATA_SIZE,
			edges: codeExamples.map((codeExample) => ({
				cursor: codeExample.id,
				node: codeExample
			})),
			nodes: codeExamples
		}
	}
};
