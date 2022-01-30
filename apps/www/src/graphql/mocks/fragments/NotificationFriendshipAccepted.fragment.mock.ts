import { dayjs } from "@makepurple/utils";
import { NotificationFriendshipAccepted, NotificationType } from "../../generated";
import { Friendship_fragment_mock } from "./Friendship.fragment.mock";
import { User_fragment_mock } from "./User.fragment.mock";

export const NotificationFriendshipAccepted_fragment_mock: NotificationFriendshipAccepted = {
	__typename: "NotificationFriendshipAccepted",
	id: "0",
	friendship: Friendship_fragment_mock,
	friendshipId: Friendship_fragment_mock.id,
	opened: false,
	type: NotificationType.PostCommented,
	updatedAt: dayjs(1318781876406).toDate(),
	user: User_fragment_mock,
	userId: User_fragment_mock.id
};
