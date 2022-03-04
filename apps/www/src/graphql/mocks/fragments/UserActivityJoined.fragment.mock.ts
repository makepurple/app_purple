import { dayjs } from "@makepurple/utils";
import { UserActivityJoined } from "../../generated";
import { User_fragment_mock } from "./User.fragment.mock";
import { UserActivity_fragment_mock } from "./UserActivity.fragment.mock";

export const UserActivityJoined_fragment_mock: UserActivityJoined = {
	...UserActivity_fragment_mock,
	__typename: "UserActivityJoined",
	id: "0",
	updatedAt: dayjs(1318781876406).toDate(),
	user: User_fragment_mock,
	userId: "0"
};
