import { objectType } from "nexus";

export const CodeExampleEdge = objectType({
	name: "CodeExampleEdge",
	definition: (t) => {
		t.implements("ConnectionEdge");
		t.nonNull.field("node", { type: "CodeExample" });
	}
});
