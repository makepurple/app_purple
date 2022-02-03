import { dayjs } from "@makepurple/utils";
import { UserActivity } from "../../generated";
import { User_fragment_mock } from "./User.fragment.mock";

export const UserActivity_fragment_mock: UserActivity = {
	id: "0",
	updatedAt: dayjs(1318781876406).toDate(),
	user: User_fragment_mock,
	userId: User_fragment_mock.id
};
