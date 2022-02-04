import { dayjs } from "@makepurple/utils";
import { User_fragment_mock } from ".";
import { UserActivityFriendAcceptUser } from "../../generated";
import { Friendship_fragment_mock } from "./Friendship.fragment.mock";

export const UserActivityFriendAcceptUser_fragment_mock: UserActivityFriendAcceptUser = {
	__typename: "UserActivityFriendAcceptUser",
	friendship: Friendship_fragment_mock,
	friendshipId: Friendship_fragment_mock.id,
	id: "0",
	updatedAt: dayjs(1318781876406).toDate(),
	user: User_fragment_mock,
	userId: "0"
};
