import { CreateExperienceMutation } from "../../generated";
import { Experience_fragment_mock } from "../fragments";

export const CreateExperience_mock: CreateExperienceMutation = {
	__typename: "Mutation",
	createExperience: {
		__typename: "CreateExperiencePayload",
		record: Experience_fragment_mock
	}
};
