import { dayjs } from "@makepurple/utils";
import { NotificationPostCommented, NotificationType } from "../../generated";
import { Post_fragment_mock } from "./Post.fragment.mock";
import { User_fragment_mock } from "./User.fragment.mock";

export const NotificationPostCommented_fragment_mock: NotificationPostCommented = {
	__typename: "NotificationPostCommented",
	id: "0",
	opened: false,
	post: Post_fragment_mock,
	postId: Post_fragment_mock.id,
	type: NotificationType.PostCommented,
	updatedAt: dayjs(1318781876406).toDate(),
	user: User_fragment_mock,
	userId: User_fragment_mock.id
};
