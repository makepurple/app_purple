import { objectType } from "nexus";

export const PostNotFoundError = objectType({
	name: "PostNotFoundError",
	definition: (t) => {
		t.implements("PublishPostError");
	}
});
