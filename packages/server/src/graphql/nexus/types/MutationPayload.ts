import { interfaceType } from "nexus";

export const MutationPayload = interfaceType({
	name: "MutationPayload",
	definition: (t) => {
		t.nonNull.field("query", {
			type: "Query",
			resolve: () => ({})
		});
	}
});
