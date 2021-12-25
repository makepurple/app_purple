import { inputObjectType } from "nexus";

export const RepositoryUpdateInput = inputObjectType({
	name: "RepositoryUpdateInput",
	definition: (t) => {
		t.list.nonNull.field("skills", {
			type: "SkillWhereUniqueInput"
		});
	}
});
