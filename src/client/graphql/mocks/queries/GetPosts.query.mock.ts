import type { GetPostsQuery, GetPostsQueryVariables } from "@/client/graphql/generated";
import { Post_fragment_mock } from "@/client/graphql/mocks/fragments";

const DATA_SIZE = 10;

export const GetPosts_mock: GetPostsQuery = {
	__typename: "Query",
	posts: Array(DATA_SIZE)
		.fill(null)
		.map((id) => ({
			...Post_fragment_mock,
			id
		}))
};

export const GetPosts_variables_mock: GetPostsQueryVariables = {
	where: {
		authorId: Post_fragment_mock.authorId
	}
};
