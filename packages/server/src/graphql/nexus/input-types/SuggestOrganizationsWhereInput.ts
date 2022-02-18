import { inputObjectType } from "nexus";

export const SuggestOrganizationsWhereInput = inputObjectType({
	name: "SuggestOrganizationsWhereInput",
	definition: (t) => {
		t.nonNull.string("name");
	}
});
