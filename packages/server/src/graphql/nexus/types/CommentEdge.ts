import { oneLine } from "common-tags";
import { objectType } from "nexus";

export const CommentEdge = objectType({
	name: "CommentEdge",
	description: oneLine`
		Relay-style edge for Comment types.
	`,
	definition: (t) => {
		t.nonNull.string("cursor");
		t.nonNull.field("node", { type: "Comment" });
	}
});
