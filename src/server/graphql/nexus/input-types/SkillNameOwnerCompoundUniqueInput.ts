import { inputObjectType } from "nexus";

export const SkillNameOwnerCompoundUniqueInput = inputObjectType({
	name: "SkillNameOwnerCompoundUniqueInput",
	definition: (t) => {
		t.nonNull.string("name");
		t.nonNull.string("owner");
	}
});
