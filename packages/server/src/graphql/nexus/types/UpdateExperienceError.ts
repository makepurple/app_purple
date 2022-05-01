import { interfaceType } from "nexus";

export const UpdateExperienceError = interfaceType({
	name: "UpdateExperienceError",
	definition: (t) => {
		t.implements("MutationError");
	}
});
