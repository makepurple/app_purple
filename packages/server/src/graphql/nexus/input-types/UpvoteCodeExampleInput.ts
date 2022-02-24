import { inputObjectType } from "nexus";

export const UpvoteCodeExampleInput = inputObjectType({
	name: "UpvoteCodeExampleInput",
	definition: (t) => {
		t.boolean("upvote");
	}
});
