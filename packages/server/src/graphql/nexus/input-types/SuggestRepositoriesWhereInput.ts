import { inputObjectType } from "nexus";

export const SuggestRepositoriesWhereInput = inputObjectType({
	name: "SuggestRepositoriesWhereInput",
	definition: (t) => {
		t.nonNull.string("name");
	}
});
