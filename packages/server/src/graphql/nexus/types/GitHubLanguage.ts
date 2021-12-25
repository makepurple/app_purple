import { objectType } from "nexus";

export const GitHubLanguage = objectType({
	name: "GitHubLanguage",
	definition: (t) => {
		t.string("color");
		t.nonNull.string("id");
		t.nonNull.string("name");
	}
});
