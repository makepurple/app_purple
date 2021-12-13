import { objectType } from "nexus";
import { PostImage as _PostImage } from "nexus-prisma";

export const PostImage = objectType({
	name: _PostImage.$name,
	description: _PostImage.$description,
	definition: (t) => {
		t.field(_PostImage.id);
		t.field(_PostImage.post);
		t.field(_PostImage.postId);
		t.field(_PostImage.url);
	}
});
