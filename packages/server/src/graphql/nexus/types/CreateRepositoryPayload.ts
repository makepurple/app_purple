import { objectType } from "nexus";

export const CreateRepositoryPayload = objectType({
	name: "CreateRepositoryPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "Repository" });
	}
});
