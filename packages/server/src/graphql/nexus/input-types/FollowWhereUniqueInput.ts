import { inputObjectType } from "nexus";

export const FollowWhereUniqueInput = inputObjectType({
	name: "FollowWhereUniqueInput",
	definition: (t) => {
		t.string("id");
	}
});
