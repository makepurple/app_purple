import { UpdateUserInfoMutation } from "../../../graphql/generated";
import { User_fragment_mock } from "../../../graphql/mocks/fragments";

export const UpdateUserInfo_mock: UpdateUserInfoMutation = {
	__typename: "Mutation",
	updateSkills: User_fragment_mock,
	updateDesiredSkills: User_fragment_mock
};
