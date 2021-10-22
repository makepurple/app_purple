import { oneLine } from "common-tags";
import { inputObjectType } from "nexus";

export const PostWhereUniqueInput = inputObjectType({
	name: "PostWhereUniqueInput",
	definition: (t) => {
		t.int("id", {
			description: oneLine`
				The id of the post to retrieve
			`
		});
	}
});
