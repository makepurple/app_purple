import { interfaceType } from "nexus";

export const UpdateDesiredSkillsError = interfaceType({
	name: "UpdateDesiredSkillsError",
	definition: (t) => {
		t.implements("MutationError");
	}
});
