import { objectType } from "nexus";
import { Experience as _Experience } from "nexus-prisma";

export const Experience = objectType({
	name: _Experience.$name,
	description: _Experience.$description,
	definition: (t) => {
		t.field(_Experience.actions);
		t.field(_Experience.endDate);
		t.field(_Experience.id);
		t.field(_Experience.location);
		t.field(_Experience.organizationName);
		t.field(_Experience.positionName);
		t.field(_Experience.startDate);
		t.field(_Experience.type);
		t.field(_Experience.user);
	}
});
