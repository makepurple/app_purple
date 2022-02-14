import { objectType } from "nexus";

export const GitHubRepositoryEdge = objectType({
	name: "GitHubRepositoryEdge",
	definition: (t) => {
		t.implements("ConnectionEdge");
		t.nonNull.field("node", { type: "GitHubRepository" });
	}
});
