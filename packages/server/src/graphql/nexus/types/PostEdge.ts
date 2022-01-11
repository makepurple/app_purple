import { oneLine } from "common-tags";
import { objectType } from "nexus";

export const PostEdge = objectType({
	name: "PostEdge",
	description: oneLine`
		Relay-style edge for Post types.
	`,
	definition: (t) => {
		t.implements("ConnectionEdge");
		t.nonNull.field("node", { type: "Post" });
	}
});
