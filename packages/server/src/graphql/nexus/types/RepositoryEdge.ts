import { oneLine } from "common-tags";
import { objectType } from "nexus";

export const RepositoryEdge = objectType({
	name: "RepositoryEdge",
	description: oneLine`
		Relay-style edge for Repository type
	`,
	definition: (t) => {
		t.implements("ConnectionEdge");
		t.nonNull.field("node", { type: "Repository" });
	}
});
