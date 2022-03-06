import { dayjs } from "@makepurple/utils";
import { User_fragment_mock } from ".";
import { FollowType, UserActivityFollowSkill } from "../../generated";
import { Skill_fragment_mock } from "./Skill.fragment.mock";

export const UserActivityFollowSkill_fragment_mock: UserActivityFollowSkill = {
	__typename: "UserActivityFollowSkill",
	follow: {
		__typename: "Follow",
		id: "0",
		follower: User_fragment_mock,
		following: {
			...{ ...Skill_fragment_mock, id: "0" }
		},
		createdAt: dayjs(1318781876406).toDate(),
		type: FollowType.Skill,
		user: {
			...User_fragment_mock,
			id: "1"
		},
		userId: "1"
	},
	followId: "0",
	id: "0",
	updatedAt: dayjs(1318781876406).toDate(),
	user: User_fragment_mock,
	userId: "0"
};
