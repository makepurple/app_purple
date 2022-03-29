import { dayjs } from "@makepurple/utils";
import { CodeExample_fragment_mock } from ".";
import { Comment } from "../../generated";
import { User_fragment_mock } from "./User.fragment.mock";

export const Comment_fragment_mock: Comment = {
	__typename: "Comment" as const,
	author: User_fragment_mock,
	authorId: User_fragment_mock.id,
	codeExample: CodeExample_fragment_mock,
	codeExampleId: CodeExample_fragment_mock.id,
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
	downvoters: {
		__typename: "UserConnection" as const,
		edges: [],
		nodes: [],
		totalCount: 0,
		pageInfo: {
			__typename: "PageInfo" as const,
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		}
	},
	id: "0",
	parent: null,
	parentId: null,
	post: null,
	postId: null,
	replies: {
		__typename: "CommentConnection" as const,
		pageInfo: {
			__typename: "PageInfo" as const,
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		},
		totalCount: 0,
		edges: [],
		nodes: []
	},
	repliesCount: 0,
	updatedAt: dayjs(1318781876406).toDate(),
	upvoters: {
		__typename: "UserConnection" as const,
		pageInfo: {
			__typename: "PageInfo" as const,
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
