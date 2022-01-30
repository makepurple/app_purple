import { dayjs } from "@makepurple/utils";
import { Friendship } from "../../generated";
import { User_fragment_mock } from "./User.fragment.mock";

export const Friendship_fragment_mock: Friendship = {
	__typename: "Friendship",
	friender: {
		...User_fragment_mock,
		id: "0"
	},
	frienderId: "0",
	friending: {
		...User_fragment_mock,
		id: "1"
	},
	friendingId: "1",
	id: "0",
	rejected: false,
	updatedAt: dayjs(1318781876406).toDate()
};
