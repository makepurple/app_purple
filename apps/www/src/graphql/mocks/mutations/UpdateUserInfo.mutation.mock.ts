import { UpdateUserInfoMutation } from "../../generated";
import { User_fragment_mock } from "../fragments";

export const UpdateUserInfo_mock: UpdateUserInfoMutation = {
	__typename: "Mutation",
	updateSkills: {
		__typename: "UpdateSkillsPayload",
		record: User_fragment_mock
	},
	updateDesiredSkills: {
		__typename: "UpdateDesiredSkillsPayload",
		record: User_fragment_mock
	}
};
