import { objectType } from "nexus";

export const BanUserPayload = objectType({
	name: "BanUserPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "User" });
	}
});
