import { interfaceType } from "nexus";

export const RemoveDesiredSkillError = interfaceType({
	name: "RemoveDesiredSkillError",
	definition: (t) => {
		t.implements("MutationError");
	}
});
