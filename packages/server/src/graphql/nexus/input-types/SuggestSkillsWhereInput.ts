import { inputObjectType } from "nexus";

export const SuggestSkillsWhereInput = inputObjectType({
	name: "SuggestSkillsWhereInput",
	definition: (t) => {
		t.nonNull.string("name");
		t.string("owner");
	}
});
