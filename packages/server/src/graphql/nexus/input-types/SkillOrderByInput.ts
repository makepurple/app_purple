import { inputObjectType } from "nexus";

export const SkillOrderByInput = inputObjectType({
	name: "SkillOrderByInput",
	definition: (t) => {
		t.field("desiringUsers", { type: "OrderByRelationAggregateInput" });
		t.field("name", { type: "SortOrder" });
		t.field("owner", { type: "SortOrder" });
		t.field("users", { type: "OrderByRelationAggregateInput" });
	}
});
