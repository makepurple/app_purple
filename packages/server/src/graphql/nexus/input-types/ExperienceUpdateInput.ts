import { inputObjectType } from "nexus";

export const ExperienceUpdateInput = inputObjectType({
	name: "ExperienceUpdateInput",
	definition: (t) => {
		t.field("endDate", { type: "DateTime" });
		t.list.nonNull.string("highlights");
		t.string("location");
		t.string("organizationName");
		t.string("positionName");
		t.field("startDate", { type: "DateTime" });
		t.field("type", { type: "ExperienceType" });
	}
});
