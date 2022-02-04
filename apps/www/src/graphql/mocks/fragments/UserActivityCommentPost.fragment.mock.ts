import { dayjs } from "@makepurple/utils";
import { Post_fragment_mock, User_fragment_mock } from ".";
import { UserActivityCommentPost } from "../../generated";
import { Comment_fragment_mock } from "./Comment.fragment.mock";

export const UserActivityCommentPost_fragment_mock: UserActivityCommentPost = {
	__typename: "UserActivityCommentPost",
	comment: {
		...Comment_fragment_mock,
		post: Post_fragment_mock,
		postId: Post_fragment_mock.id
	},
	commentId: Comment_fragment_mock.id,
	id: "0",
	updatedAt: dayjs(1318781876406).toDate(),
	user: User_fragment_mock,
	userId: "0"
};
