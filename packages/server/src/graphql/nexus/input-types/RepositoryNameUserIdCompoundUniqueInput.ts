import { inputObjectType } from "nexus";

export const RepositoryNameUserIdCompoundUniqueInput = inputObjectType({
	name: "RepositoryNameUserIdCompoundUniqueInput",
	definition: (t) => {
		t.nonNull.string("name");
		t.nonNull.string("userId");
	}
});
