import { inputObjectType } from "nexus";

export const ExperienceCreateInput = inputObjectType({
	name: "ExperienceCreateInput",
	definition: (t) => {
		t.field("endDate", { type: "DateTime" });
		t.list.nonNull.string("highlights");
		t.string("location");
		t.nonNull.string("organizationName");
		t.nonNull.string("positionName");
		t.nonNull.field("startDate", { type: "DateTime" });
		t.field("type", { type: "ExperienceType" });
	}
});
