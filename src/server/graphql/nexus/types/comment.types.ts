import { objectType } from "nexus";

export const Comment = objectType({
	name: "Comment",
	definition: (t) => {
		t.model.id();
		t.model.author();
		t.model.content();
		t.model.post();
		t.model.createdAt();
		t.model.updatedAt();
	}
});
