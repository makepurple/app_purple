import { inputObjectType } from "nexus";

export const SuggestSkillWhereInput = inputObjectType({
	name: "SuggestSkillWhereInput",
	definition: (t) => {
		t.nonNull.string("name");
		t.nonNull.string("owner");
	}
});
