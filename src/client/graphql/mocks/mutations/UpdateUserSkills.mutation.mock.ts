import { UpdateUserSkillsMutation } from "@/client/graphql/generated";
import { User_fragment_mock } from "@/client/graphql/mocks/fragments";

export const UpdateUserSkills_mock: UpdateUserSkillsMutation = {
	__typename: "Mutation",
	updateSkills: User_fragment_mock,
	updateDesiredSkills: User_fragment_mock
};
