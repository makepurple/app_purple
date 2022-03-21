import { GetPostCommentsQuery } from "../../generated";
import { Comment_fragment_mock } from "../fragments/Comment.fragment.mock";

const DATA_SIZE = 8;

export const GetPostComments_mock: GetPostCommentsQuery = {
	__typename: "Query",
	post: {
		__typename: "Post",
		id: "0",
		comments: {
			__typename: "CommentConnection" as const,
			pageInfo: {
				__typename: "PageInfo" as const,
				endCursor: `${DATA_SIZE - 1}`,
				hasNextPage: false,
				hasPreviousPage: false,
				startCursor: null
			},
			edges: Array.from({ length: DATA_SIZE }, (_i, i) => ({
				__typename: "CommentEdge" as const,
				cursor: `${i}`,
				node: {
					...Comment_fragment_mock,
					id: `${i}`
				}
			})),
			nodes: Array.from({ length: 1 }, (_i, i) => ({
				...Comment_fragment_mock,
				id: `${i}`,
				replies: {
					__typename: "CommentConnection" as const,
					pageInfo: {
						__typename: "PageInfo" as const,
						endCursor: `${DATA_SIZE - 1}_${DATA_SIZE - 1}`,
						hasNextPage: false,
						hasPreviousPage: false,
						startCursor: null
					},
					totalCount: DATA_SIZE,
					edges: Array.from({ length: DATA_SIZE }, (_j, j) => ({
						__typename: "CommentEdge" as const,
						cursor: `${i}_${j}`,
						node: {
							...Comment_fragment_mock,
							id: `${i}_${j}`
						}
					})),
					nodes: Array.from({ length: DATA_SIZE }, (_j, j) => ({
						...Comment_fragment_mock,
						id: `${i}_${j}`,
						replies: {
							__typename: "CommentConnection" as const,
							pageInfo: {
								__typename: "PageInfo" as const,
								endCursor: `${DATA_SIZE - 1}_${DATA_SIZE - 1}_${DATA_SIZE - 1}`,
								hasNextPage: false,
								hasPreviousPage: false,
								startCursor: null
							},
							totalCount: DATA_SIZE,
							edges: Array.from({ length: DATA_SIZE }, (_k, k) => ({
								__typename: "CommentEdge" as const,
								cursor: `${i}_${j}_${k}`,
								node: {
									...Comment_fragment_mock,
									id: `${i}_${j}_${k}`
								}
							})),
							nodes: Array.from({ length: DATA_SIZE }, (_k, k) => ({
								...Comment_fragment_mock,
								id: `${i}_${j}_${k}`
							}))
						}
					}))
				}
			}))
		}
	}
};
