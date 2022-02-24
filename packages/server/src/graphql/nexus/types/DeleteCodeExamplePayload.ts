import { objectType } from "nexus";

export const DeleteCodeExamplePayload = objectType({
	name: "DeleteCodeExamplePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.nonNull.field("record", { type: "CodeExample" });
	}
});
