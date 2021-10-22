import { inputObjectType } from "nexus";

export const UserWhereUniqueInput = inputObjectType({
	name: "UserWhereUniqueInput",
	definition: (t) => {
		t.string("id");
		t.string("name");
		t.string("email");
	}
});
