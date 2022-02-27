import { GetUserCodeExamplesQuery } from "../../generated";
import {
	CodeExample_fragment_mock,
	PageInfo_fragment_mock,
	User_fragment_mock
} from "../fragments";

const DATA_SIZE = 20;

const codeExamples = Array.from({ length: DATA_SIZE }, (_, i) => ({
	...CodeExample_fragment_mock,
	id: `${i}`
}));

export const GetUserCodeExamples_mock: GetUserCodeExamplesQuery = {
	__typename: "Query",
	user: {
		...User_fragment_mock,
		codeExamples: {
			__typename: "CodeExampleConnection",
			pageInfo: PageInfo_fragment_mock,
			totalCount: codeExamples.length,
			edges: codeExamples.map((codeExample) => ({
				__typename: "CodeExampleEdge",
				cursor: codeExample.id,
				node: codeExample
			})),
			nodes: codeExamples as any
		}
	}
};
