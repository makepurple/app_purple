import { inputObjectType } from "nexus";

export const FriendshipWhereUniqueInput = inputObjectType({
	name: "FriendshipWhereUniqueInput",
	definition: (t) => {
		t.string("id");
	}
});
