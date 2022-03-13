import { CreateExperienceMutation } from "../../generated";
import { Experience_fragment_mock, User_fragment_mock } from "../fragments";

export const CreateExperience_mock: CreateExperienceMutation = {
	__typename: "Mutation",
	createExperience: {
		__typename: "CreateExperiencePayload",
		viewer: User_fragment_mock,
		record: Experience_fragment_mock
	}
};
