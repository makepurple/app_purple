import { NexusPrisma } from "@makepurple/prisma/nexus";
import { objectType } from "nexus";

export const Experience = objectType({
	name: NexusPrisma.Experience.$name,
	description: NexusPrisma.Experience.$description,
	definition: (t) => {
		t.field(NexusPrisma.Experience.endDate);
		t.field(NexusPrisma.Experience.highlights);
		t.field(NexusPrisma.Experience.id);
		t.field(NexusPrisma.Experience.location);
		t.field(NexusPrisma.Experience.organization);
		t.field(NexusPrisma.Experience.organizationName);
		t.field(NexusPrisma.Experience.positionName);
		t.field(NexusPrisma.Experience.startDate);
		t.field(NexusPrisma.Experience.type);
		t.field(NexusPrisma.Experience.user);
	}
});
