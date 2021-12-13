import { inputObjectType } from "nexus";

export const ExperienceOrderByInput = inputObjectType({
	name: "ExperienceOrderByInput",
	definition: (t) => {
		t.field("startDate", { type: "SortOrder" });
		t.field("endDate", { type: "SortOrder" });
	}
});
