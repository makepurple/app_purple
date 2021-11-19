import { inputObjectType } from "nexus";

export const EnumExperienceTypeNullableFilter = inputObjectType({
	name: "EnumExperienceTypeNullableFilter",
	definition: (t) => {
		t.field("equals", { type: "ExperienceType" });
		t.list.nonNull.field("in", { type: "ExperienceType" });
		t.list.nonNull.field("notIn", { type: "ExperienceType" });
	}
});
