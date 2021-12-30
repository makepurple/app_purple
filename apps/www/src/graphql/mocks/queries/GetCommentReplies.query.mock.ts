import { GetCommentRepliesQuery } from "../../generated";
import { Comment_fragment_mock } from "../fragments/Comment.fragment.mock";

const DATA_SIZE = 6;

const replies = Array.from({ length: DATA_SIZE }, (_, i) => ({
	...Comment_fragment_mock,
	id: i.toString(),
	replies: {
		__typename: "CommentConnection" as const,
		pageInfo: {
			__typename: "PageInfo" as const,
			endCursor: `${DATA_SIZE - 1}`,
			hasNextPage: true,
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
			id: `${i}_${j}`
		}))
	}
}));

export const GetCommentReplies_mock: GetCommentRepliesQuery = {
	__typename: "Query",
	comment: {
		__typename: "Comment",
		id: "root",
		replies: {
			__typename: "CommentConnection",
			pageInfo: {
				__typename: "PageInfo",
				endCursor: `${DATA_SIZE - 1}`,
				hasNextPage: true,
				hasPreviousPage: false,
				startCursor: null
			},
			totalCount: DATA_SIZE,
			edges: replies.map((reply) => ({
				__typename: "CommentEdge",
				cursor: reply.id,
				node: reply
			})),
			nodes: replies
		}
	}
};
