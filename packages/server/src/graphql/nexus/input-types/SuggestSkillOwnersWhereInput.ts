import { inputObjectType } from "nexus";

export const SuggestSkillOwnersWhereInput = inputObjectType({
	name: "SuggestSkillOwnersWhereInput",
	definition: (t) => {
		t.nonNull.string("name");
	}
});
