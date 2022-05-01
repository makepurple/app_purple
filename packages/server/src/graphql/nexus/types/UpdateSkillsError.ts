import { interfaceType } from "nexus";

export const UpdateSkillsError = interfaceType({
	name: "UpdateSkillsError",
	definition: (t) => {
		t.implements("MutationError");
	}
});
