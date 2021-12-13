import { inputObjectType } from "nexus";

export const UpdateSkillsInput = inputObjectType({
	name: "UpdateSkillsInput",
	definition: (t) => {
		t.nonNull.list.nonNull.field("skills", {
			type: "SkillWhereUniqueInput"
		});
	}
});
