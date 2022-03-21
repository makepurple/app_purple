import { GetCommentRepliesQuery } from "../../generated";
import { Comment_fragment_mock } from "../fragments/Comment.fragment.mock";

const DATA_SIZE = 8;

const replies = Array.from({ length: DATA_SIZE }, (_, i) => ({
	...Comment_fragment_mock,
	id: i.toString()
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
