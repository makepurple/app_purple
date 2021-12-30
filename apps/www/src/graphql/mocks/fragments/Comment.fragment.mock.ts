import { dayjs } from "@makepurple/utils";
import { Comment } from "../../generated";
import { User_fragment_mock } from "./User.fragment.mock";

export const Comment_fragment_mock: Comment = {
	__typename: "Comment",
	author: User_fragment_mock,
	authorId: User_fragment_mock.id,
	content: [
		{
			type: "paragraph",
			children: [
				{
					text: "I found that to be very interesting. Thanks for the read!"
				}
			]
		}
	],
	createdAt: dayjs(1318781876406).toDate(),
	id: "0",
	parent: null,
	parentId: null,
	post: null,
	postId: null,
	replies: {
		__typename: "CommentConnection",
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		},
		totalCount: 0,
		edges: [],
		nodes: []
	},
	updatedAt: dayjs(1318781876406).toDate(),
	upvoters: {
		__typename: "UserConnection",
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		},
		totalCount: 0,
		edges: [],
		nodes: []
	},
	upvotes: 123
};
