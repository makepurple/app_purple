import { inputObjectType } from "nexus";

export const ExperienceWhereInput = inputObjectType({
	name: "ExperienceWhereInput",
	definition: (t) => {
		t.field("organizationName", { type: "StringNullableFilter" });
		t.field("positionName", { type: "StringNullableFilter" });
		t.field("type", { type: "EnumExperienceTypeNullableFilter" });
		t.string("userId");
	}
});
