import { NexusPrisma } from "@makepurple/prisma/nexus";
import { objectType } from "nexus";

export const PostImage = objectType({
	name: NexusPrisma.PostImage.$name,
	description: NexusPrisma.PostImage.$description,
	definition: (t) => {
		t.field(NexusPrisma.PostImage.id);
		t.field(NexusPrisma.PostImage.post);
		t.field(NexusPrisma.PostImage.postId);
		t.field(NexusPrisma.PostImage.url);
	}
});
