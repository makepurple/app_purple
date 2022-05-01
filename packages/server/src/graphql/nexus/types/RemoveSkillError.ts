import { interfaceType } from "nexus";

export const RemoveSkillError = interfaceType({
	name: "RemoveSkillError",
	definition: (t) => {
		t.implements("MutationError");
	}
});
