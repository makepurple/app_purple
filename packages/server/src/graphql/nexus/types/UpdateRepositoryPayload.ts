import { objectType } from "nexus";

export const UpdateRepositoryPayload = objectType({
	name: "UpdateRepositoryPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Repository" });
	}
});
