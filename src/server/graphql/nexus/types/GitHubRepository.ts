import { objectType } from "nexus";

export const GitHubRepository = objectType({
	name: "GitHubRepository",
	definition: (t) => {
		t.nonNull.string("id");
		t.string("description");
		t.nonNull.string("name");
		t.nonNull.field("owner", { type: "GitHubUser" });
	}
});
