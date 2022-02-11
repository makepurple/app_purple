import { inputObjectType } from "nexus";

export const PostOrderByInput = inputObjectType({
	name: "PostOrderByInput",
	definition: (t) => {
		t.field("publishedAt", { type: "SortOrder" });
		t.field("upvoters", { type: "OrderByRelationAggregateInput" });
	}
});
