import { objectType } from "nexus";
import { Experience } from "nexus-prisma";

export const experienceTypes = [
	objectType({
		name: Experience.$name,
		description: Experience.$description,
		definition: (t) => {
			t.field(Experience.actions);
			t.field(Experience.endDate);
			t.field(Experience.id);
			t.field(Experience.location);
			t.field(Experience.organizationName);
			t.field(Experience.positionName);
			t.field(Experience.startDate);
			t.field(Experience.type);
			t.field(Experience.user);
		}
	})
];
