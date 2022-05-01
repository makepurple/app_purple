import { objectType } from "nexus";

export const PostDraftLimitError = objectType({
	name: "PostDraftLimitError",
	definition: (t) => {
		t.implements("CreatePostError");
	}
});
