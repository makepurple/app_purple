import { objectType } from "nexus";
import { Comment } from "nexus-prisma";

export const commentTypes = [
	objectType({
		name: Comment.$name,
		description: Comment.$description,
		definition: (t) => {
			t.field(Comment.id);
			t.field(Comment.author);
			t.field(Comment.content);
			t.field(Comment.post);
			t.field(Comment.createdAt);
			t.field(Comment.updatedAt);
		}
	})
];
