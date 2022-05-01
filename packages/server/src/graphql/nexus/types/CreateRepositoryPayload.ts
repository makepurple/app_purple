import { objectType } from "nexus";

export const CreateRepositoryPayload = objectType({
	name: "CreateRepositoryPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.list.nonNull.field("errors", { type: "CreateRepositoryError" });
		t.field("record", { type: "Repository" });
	}
});
