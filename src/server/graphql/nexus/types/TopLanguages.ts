import { oneLine } from "common-tags";
import { objectType } from "nexus";

export const TopLanguages = objectType({
	name: "TopLanguages",
	description: oneLine`
		The most used languages by a user, determined by number of bytes written to repositories
		owned by the user on GitHub.
	`,
	definition: (t) => {
		t.nonNull.list.nonNull.field("nodes", { type: "TopLanguage" });
		t.nonNull.int("totalSize", {
			description: oneLine`
				The total number of bytes written across all owned repositories across all
				languages.
			`,
			resolve: ({ nodes }) => nodes.reduce((sum, node) => sum + node.size, 0)
		});
		t.nonNull.int("totalCount", {
			description: oneLine`
				The total number of languages across all owned repositories.
			`,
			resolve: ({ nodes }) => nodes.length
		});
	}
});
