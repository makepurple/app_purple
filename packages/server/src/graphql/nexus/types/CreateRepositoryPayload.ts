import { objectType } from "nexus";

export const CreateRepositoryPayload = objectType({
	name: "CreateRepositoryPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "Repository" });
	}
});
