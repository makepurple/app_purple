import { inputObjectType } from "nexus";

export const ExperienceCreateInput = inputObjectType({
	name: "ExperienceCreateInput",
	definition: (t) => {
		t.dateTime("endDate");
		t.list.nonNull.string("highlights");
		t.string("location");
		t.nonNull.string("organizationName");
		t.string("positionName");
		t.dateTime("startDate");
		t.field("type", { type: "ExperienceType" });
	}
});
