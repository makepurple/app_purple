import { interfaceType } from "nexus";

export const AddDesiredSkillError = interfaceType({
	name: "AddDesiredSkillError",
	definition: (t) => {
		t.implements("MutationError");
	}
});
