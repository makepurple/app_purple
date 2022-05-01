import { interfaceType } from "nexus";

export const AddSkillError = interfaceType({
	name: "AddSkillError",
	definition: (t) => {
		t.implements("MutationError");
	}
});
