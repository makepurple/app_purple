import { oneLine } from "common-tags";
import { objectType } from "nexus";

export const TopLanguage = objectType({
	name: "TopLanguage",
	description: oneLine`
		One of the most used languages by a user
	`,
	definition: (t) => {
		t.nonNull.string("name", {
			description: oneLine`
				The name of the language.
			`
		});
		t.nonNull.string("color", {
			description: oneLine`
				The color of the language, defined by GitHub
			`
		});
		t.nonNull.int("size", {
			description: oneLine`
				The sum of number of bytes written across all owned repositories in this
				language.
			`
		});
	}
});
