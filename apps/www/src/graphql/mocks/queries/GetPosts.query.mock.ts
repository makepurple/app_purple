import { faker } from "@faker-js/faker";
import type { GetPostsQuery, GetPostsQueryVariables } from "../../generated";
import { Post_fragment_mock } from "../fragments";

faker.seed(1);

const DATA_SIZE = 10;

const posts = Array(DATA_SIZE)
	.fill(null)
	.map((__, i) => ({
		...Post_fragment_mock,
		__typename: "Post" as const,
		id: i.toString(),
		description: faker.lorem.sentences(faker.datatype.number({ min: 0, max: 4 })),
		thumbnailUrl: faker.datatype.boolean() ? Post_fragment_mock.thumbnailUrl : undefined
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
		nodes: posts.map((post) => post) as any,
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
