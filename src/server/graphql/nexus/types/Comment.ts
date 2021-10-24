import { objectType } from "nexus";
import { Comment as _Comment } from "nexus-prisma";

export const Comment = objectType({
	name: _Comment.$name,
	description: _Comment.$description,
	definition: (t) => {
		t.field(_Comment.author);
		t.field(_Comment.content);
		t.field(_Comment.createdAt);
		t.field(_Comment.id);
		t.field(_Comment.post);
		t.field(_Comment.updatedAt);
	}
});
