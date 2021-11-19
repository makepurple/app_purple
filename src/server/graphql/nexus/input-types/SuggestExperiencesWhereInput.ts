import { inputObjectType } from "nexus";

export const SuggestExperiencesWhereInput = inputObjectType({
	name: "SuggestExperiencesWhereInput",
	definition: (t) => {
		t.nonNull.string("name");
	}
});
