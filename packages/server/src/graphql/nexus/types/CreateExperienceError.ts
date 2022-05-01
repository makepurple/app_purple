import { interfaceType } from "nexus";

export const CreateExperienceError = interfaceType({
	name: "CreateExperienceError",
	definition: (t) => {
		t.implements("MutationError");
	}
});
