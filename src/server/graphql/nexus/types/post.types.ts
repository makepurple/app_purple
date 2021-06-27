import { objectType } from "nexus";
import { Post } from "nexus-prisma";

export const postTypes = [
	objectType({
		name: Post.$name,
		description: Post.$description,
		definition: (t) => {
			t.field(Post.id);
			t.field(Post.author);
			t.field(Post.comments);
			t.field(Post.content);
			t.field(Post.thumbnailImageUrl);
			t.field(Post.title);
			t.field(Post.createdAt);
			t.field(Post.updatedAt);
		}
	})
];
