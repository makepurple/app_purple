import { objectType } from "nexus";

export const DeleteCodeExamplePayload = objectType({
	name: "DeleteCodeExamplePayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "CodeExample" });
	}
});
