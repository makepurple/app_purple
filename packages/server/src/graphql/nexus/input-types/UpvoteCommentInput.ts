import { inputObjectType } from "nexus";

export const UpvoteCommentInput = inputObjectType({
	name: "UpvoteCommentInput",
	definition: (t) => {
		t.boolean("upvote");
	}
});
