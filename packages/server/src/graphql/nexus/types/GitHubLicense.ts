import { objectType } from "nexus";

export const GitHubLicense = objectType({
	name: "GitHubLicense",
	definition: (t) => {
		t.string("description");
		t.nonNull.string("id");
		t.nonNull.string("name");
		t.string("nickname");
		t.string("spdxId");
		t.url("url");
	}
});
