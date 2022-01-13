import { inputObjectType } from "nexus";

export const OrderByRelationAggregateInput = inputObjectType({
	name: "OrderByRelationAggregateInput",
	definition: (t) => {
		t.field("_count", { type: "SortOrder" });
	}
});
