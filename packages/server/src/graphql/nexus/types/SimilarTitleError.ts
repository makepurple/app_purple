import { objectType } from "nexus";

export const SimilarTitleError = objectType({
	name: "SimilarTitleError",
	definition: (t) => {
		t.implements("CreateCodeExampleError");
		t.implements("PublishPostError");
	}
});
