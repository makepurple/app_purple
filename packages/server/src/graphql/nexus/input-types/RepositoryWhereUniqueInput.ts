import { inputObjectType } from "nexus";

export const RepositoryWhereUniqueInput = inputObjectType({
	name: "RepositoryWhereUniqueInput",
	definition: (t) => {
		t.string("id");
		t.field("name_owner", {
			type: "RepositoryNameOwnerCompoundUniqueInput"
		});
	}
});
