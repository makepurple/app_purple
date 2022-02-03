import { UserActivityPublishPost } from "../../generated";
import { Post_fragment_mock } from "./Post.fragment.mock";
import { UserActivity_fragment_mock } from "./UserActivity.fragment.mock";

export const UserActivityPublishPost_fragment_mock: UserActivityPublishPost = {
	...UserActivity_fragment_mock,
	__typename: "UserActivityPublishPost",
	post: Post_fragment_mock,
	postId: Post_fragment_mock.id
};
