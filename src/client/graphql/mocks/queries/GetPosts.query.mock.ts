import type { GetPostsQuery, GetPostsQueryVariables } from "@/client/graphql/generated";
import { Post_fragment_mock } from "@/client/graphql/mocks/fragments";

const DATA_SIZE = 10;

const posts = Array(DATA_SIZE)
	.fill(null)
	.map((__, i) => ({
		...Post_fragment_mock,
		__typename: "Post" as const,
		id: i
	}));

export const GetPosts_mock: GetPostsQuery = {
	__typename: "Query",
	posts: {
		__typename: "PostConnection",
		edges: posts.map((post) => ({
			__typename: "PostEdge",
			cursor: post.id.toString(),
			node: post
		})),
		nodes: posts.map((post) => post),
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		}
	}
};

export const GetPosts_variables_mock: GetPostsQueryVariables = {
	after: null,
	first: 20,
	where: {
		author: {
			name: {
				equals: "leedavidcs"
			}
		}
	}
};
