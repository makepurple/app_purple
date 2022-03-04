import { dayjs } from "@makepurple/utils";
import { UserActivityUpvotePost } from "../../generated";
import { Post_fragment_mock } from "./Post.fragment.mock";
import { User_fragment_mock } from "./User.fragment.mock";
import { UserActivity_fragment_mock } from "./UserActivity.fragment.mock";

export const UserActivityUpvotePost_fragment_mock: UserActivityUpvotePost = {
	...UserActivity_fragment_mock,
	__typename: "UserActivityUpvotePost",
	post: Post_fragment_mock,
	postId: Post_fragment_mock.id,
	id: "0",
	updatedAt: dayjs(1318781876406).toDate(),
	user: User_fragment_mock,
	userId: "0"
};
