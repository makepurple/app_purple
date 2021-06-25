import { objectType } from "nexus";

export const Post = objectType({
	name: "Post",
	definition: (t) => {
		t.model.id();
		t.model.author();
		t.model.comments();
		t.model.content();
		t.model.thumbnailImageUrl();
		t.model.title();
		t.model.createdAt();
		t.model.updatedAt();
	}
});
