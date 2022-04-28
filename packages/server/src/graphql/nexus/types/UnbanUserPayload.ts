import { objectType } from "nexus";

export const UnbanUserPayload = objectType({
	name: "UnbanUserPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "User" });
	}
});
