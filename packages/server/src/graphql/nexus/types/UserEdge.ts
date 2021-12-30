import { oneLine } from "common-tags";
import { objectType } from "nexus";

export const UserEdge = objectType({
	name: "UserEdge",
	description: oneLine`
		Relay-style edge for User types.
	`,
	definition: (t) => {
		t.nonNull.string("cursor");
		t.nonNull.field("node", { type: "User" });
	}
});
