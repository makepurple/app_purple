import { UserActivityUpvotePost } from "../../generated";
import { Post_fragment_mock } from "./Post.fragment.mock";
import { UserActivity_fragment_mock } from "./UserActivity.fragment.mock";

export const UserActivityUpvotePost_fragment_mock: UserActivityUpvotePost = {
	...UserActivity_fragment_mock,
	__typename: "UserActivityUpvotePost",
	post: Post_fragment_mock,
	postId: Post_fragment_mock.id
};
