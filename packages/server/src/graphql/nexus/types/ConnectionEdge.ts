import { interfaceType } from "nexus";

export const ConnectionEdge = interfaceType({
	name: "ConnectionEdge",
	definition: (t) => {
		t.nonNull.string("cursor");
	}
});
