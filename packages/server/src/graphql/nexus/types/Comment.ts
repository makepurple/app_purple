import { NexusPrisma } from "@makepurple/prisma/nexus";
import { objectType } from "nexus";

export const Comment = objectType({
	name: NexusPrisma.Comment.$name,
	description: NexusPrisma.Comment.$description,
	definition: (t) => {
		t.field(NexusPrisma.Comment.author);
		t.field(NexusPrisma.Comment.content);
		t.field(NexusPrisma.Comment.createdAt);
		t.field(NexusPrisma.Comment.id);
		t.field(NexusPrisma.Comment.updatedAt);
	}
});
