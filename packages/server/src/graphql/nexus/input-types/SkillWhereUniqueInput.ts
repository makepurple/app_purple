import { inputObjectType } from "nexus";

export const SkillWhereUniqueInput = inputObjectType({
	name: "SkillWhereUniqueInput",
	definition: (t) => {
		t.string("id");
		t.field("name_owner", {
			type: "SkillNameOwnerCompoundUniqueInput"
		});
	}
});
