import { inputObjectType } from "nexus";

export const UpdateDesiredSkillsInput = inputObjectType({
	name: "UpdateDesiredSkillsInput",
	definition: (t) => {
		t.nonNull.list.nonNull.field("skills", {
			type: "SkillWhereUniqueInput"
		});
	}
});
