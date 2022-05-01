import { objectType } from "nexus";

export const UpdateRepositoryPayload = objectType({
	name: "UpdateRepositoryPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.list.nonNull.field("errors", { type: "UpdateRepositoryError" });
		t.field("record", { type: "Repository" });
	}
});
