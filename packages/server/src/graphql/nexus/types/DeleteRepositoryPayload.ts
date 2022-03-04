import { objectType } from "nexus";

export const DeleteRepositoryPayload = objectType({
	name: "DeleteRepositoryPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Repository" });
	}
});
