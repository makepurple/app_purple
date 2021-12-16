import { GetPostQuery, GetPostQueryVariables } from "../../../graphql/generated";
import { Post_fragment_mock } from "../../../graphql/mocks/fragments";

export const GetPost_mock: GetPostQuery = {
	__typename: "Query",
	post: Post_fragment_mock
};

export const GetPost_variable_mock: GetPostQueryVariables = {
	where: {
		authorName_urlSlug: {
			authorName: "leedavidcs",
			urlSlug: Post_fragment_mock.urlSlug
		}
	}
};
