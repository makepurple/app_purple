import { CreateExperienceMutation } from "../../generated";
import { Experience_fragment_mock, User_fragment_mock } from "../fragments";

export const CreateExperience_mock: CreateExperienceMutation = {
	__typename: "Mutation",
	createExperience: {
		__typename: "CreateExperiencePayload",
		query: {
			__typename: "Query",
			viewer: {
				__typename: "User",
				id: User_fragment_mock.id,
				experiences: [
					{
						__typename: "Experience",
						id: Experience_fragment_mock.id
					}
				]
			}
		},
		record: Experience_fragment_mock
	}
};
