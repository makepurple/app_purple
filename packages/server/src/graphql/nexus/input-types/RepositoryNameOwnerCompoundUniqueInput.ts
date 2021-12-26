import { inputObjectType } from "nexus";

export const RepositoryNameOwnerCompoundUniqueInput = inputObjectType({
	name: "RepositoryNameOwnerCompoundUniqueInput",
	definition: (t) => {
		t.nonNull.string("name");
		t.nonNull.string("owner");
	}
});
