import { dayjs } from "@makepurple/utils";
import { User_fragment_mock } from ".";
import { UserActivityFollowUser } from "../../generated";

export const UserActivityFollowUser_fragment_mock: UserActivityFollowUser = {
	__typename: "UserActivityFollowUser",
	follow: {
		__typename: "Follow",
		id: "0",
		follower: User_fragment_mock,
		following: {
			...{ ...User_fragment_mock, id: "1" }
		},
		createdAt: dayjs(1318781876406).toDate()
	},
	followId: "0",
	id: "0",
	updatedAt: dayjs(1318781876406).toDate(),
	user: User_fragment_mock,
	userId: "0"
};
