import { objectType } from "nexus";
import { Post, PostImage } from "nexus-prisma";

export const postTypes = [
	objectType({
		name: Post.$name,
		description: Post.$description,
		definition: (t) => {
			t.field(Post.id);
			t.field(Post.author);
			t.field(Post.authorId);
			t.field(Post.comments);
			t.field(Post.content);
			t.field(Post.thumbnailUrl);
			t.field(Post.title);
			t.field(Post.images);
			t.field(Post.publishedAt);
			t.field(Post.createdAt);
			t.field(Post.updatedAt);
		}
	}),
	objectType({
		name: PostImage.$name,
		description: PostImage.$description,
		definition: (t) => {
			t.field(PostImage.id);
			t.field(PostImage.post);
			t.field(PostImage.postId);
		}
	})
];
