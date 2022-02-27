import { GetCodeExampleQuery } from "../../generated";
import { CodeExample_fragment_mock } from "../fragments";

export const GetCodeExample_mock: GetCodeExampleQuery = {
	__typename: "Query",
	codeExample: CodeExample_fragment_mock as any
};
