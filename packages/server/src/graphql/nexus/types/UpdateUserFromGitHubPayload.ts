import { objectType } from "nexus";

export const UpdateUserFromGitHubPayload = objectType({
	name: "UpdateUserFromGitHubPayload",
	definition: (t) => {
		t.implements("MutationPayload");
		t.field("record", { type: "User" });
	}
});
