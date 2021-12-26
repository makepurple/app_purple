import { UpdateExperienceMutation } from "../../generated";
import { Experience_fragment_mock } from "../fragments";

export const UpdateExperience_mock: UpdateExperienceMutation = {
	__typename: "Mutation",
	updateExperience: {
		__typename: "UpdateExperiencePayload",
		record: Experience_fragment_mock
	}
};
