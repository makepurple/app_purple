import { inputObjectType } from "nexus";

export const ExperienceUpdateInput = inputObjectType({
	name: "ExperienceUpdateInput",
	definition: (t) => {
		t.dateTime("endDate");
		t.list.nonNull.string("highlights");
		t.string("location");
		t.string("organizationName");
		t.string("positionName");
		t.dateTime("startDate");
		t.field("type", { type: "ExperienceType" });
	}
});
