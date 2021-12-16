import { GetPostDraftQuery } from "../../../graphql/generated";
import { Post_fragment_mock } from "../../../graphql/mocks/fragments";

export const GetPostDraft_mock: GetPostDraftQuery = {
	__typename: "Query",
	postDraft: Post_fragment_mock
};
